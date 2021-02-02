import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";


import PageTitle from "../components/common/PageTitle";
import { deleteReport } from "../redux/Reports/actions";
import * as reportsThunks from "../redux/Reports/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';
import { Redirect } from "react-router-dom";



const ReportsList = () => {

  const {reports} = useSelector(state => state.reports);
  console.log(reports);
  const dispatch = useDispatch();
  const handler = useHttpErrorHandler();
  const { authorization } = useSelector(state => state.authorizationUsers);


  if(authorization != null && authorization.user != null && (authorization.user.type == "USER" || authorization.user.type == "TRAINER")){
    return <Redirect to="/login" /> 
  }

  useEffect(() => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(reportsThunks.fetchReports(handler));
    }
  }, [authorization]);

  const handleDeleteReport = (selectedReport) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(reportsThunks.deleteReportFromDatabase(selectedReport));
      }
  };

  const handleApproveReport = (selectedReport) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(reportsThunks.approveReport(selectedReport));
      }
  };

  return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista zgłoszeń" subtitle="Blog Reports" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Zgłoszenia</h4>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Typ
                  </th>
                  <th scope="col" className="border-0">
                    Kategoria
                  </th>
                  <th scope="col" className="border-0">
                    Krótki opis
                  </th>
                  <th scope="col" className="border-0">
                    Narzędzia
                  </th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, idx) => 
                  <tr key={idx+1}>
                  <td>{idx+1}</td>
                    <td>{report.objectType}</td>
                    <td>{report.category}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{report.description}</td>
                    <td> <Link to={"info-report/" + report._id}><FaInfoCircle /></Link> &ensp; <Link onClick={() => handleApproveReport(report)}><FaCheckCircle /></Link> &ensp;<Link onClick={() => handleDeleteReport(report)}><FaTimesCircle /></Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
    
  )
};

export default ReportsList;
