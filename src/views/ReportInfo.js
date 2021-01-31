import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editReport} from "../redux/Reports/actions";

import PageTitle from "../components/common/PageTitle";

const ReportInfo = () => {
  
  const {reports} = useSelector(state => state.reports);
  const { id } = useParams();
  const [currentReport, setCurrentReport] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      if (id) {
          const report = reports.find(report => report.id == parseInt(id));
          setCurrentReport(report);
      }
  }, [id, reports]);
  

  const updateTitle = e => {
    setCurrentReport({
      ...currentReport,
      title: e.target.value
    });
  };

  const updateContent = e => {
    setCurrentReport({
      ...currentReport,
      content: e.target.value
    });
  };


  const updateImage = (files, pictures) => {
    setCurrentReport({
      ...currentReport,
      image: pictures[0]
    })
  }


  if(!currentReport){
    return <div></div>
  }

  let link = 
          <Col md="12" className="form-group" hide={currentReport.type != "post"}>
            <label htmlFor="feDescription">Opis</label>
            <FormTextarea rows="5" placeholder="Opis zgłoszeniaa" value={currentReport.content} onChange={updateContent} />
          </Col>

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Szczegóły zgłoszenia" subtitle="Blog Reports" className="text-sm-left" />
      <Link to="/reports-list">
        <Button theme="accent" size="lg">          
          <i className="material-icons">file_copy</i> Powrót do listy
        </Button>
      </Link>

      <Link to="/reports-list">
        <Button theme="accent" size="lg">          
          <i className="material-icons">file_copy</i> Usuń zgłoszoną treść
        </Button>
      </Link>

      <Link to="/reports-list">
        <Button theme="accent" size="lg">          
          <i className="material-icons">file_copy</i> Usuń zgłoszenie
        </Button>
      </Link>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <Card small className="mb-3">
          <CardBody>
            <Form className="add-new-report">
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea rows="5"  size="lg" className="mb-3" placeholder="Tytuł zgłoszenia" defaultValue={currentReport.description} disabled="true"></FormTextarea>
                </Col>

                {currentReport.type == "post" || currentReport.type == "comment" ? 
                <Col md="12" className="form-group">
                  <Link to={"/edit-post/" + currentReport.objectId} style={{fontWeight: "bold"}} >Podejrzyj post</Link>
                </Col>
                : null}

                {currentReport.type == "review" ? 
                <Col md="12" className="form-group">
                  <Link to={"/user-profile/" + currentReport.objectId} style={{fontWeight: "bold"}}>Link do trenera</Link>
                </Col>
                : null}
                
                {currentReport.type == "review" ? 
                <Row className="ml-1 mr-1"> 
                  <Col md="9" className="form-group">
                    <label htmlFor="feDescription">Treść recenzji</label>
                    <FormTextarea value={currentReport.objectContent} disabled="true"/>
                  </Col>
                  <Col md="3" className="form-group">
                    <label htmlFor="feDescription">Ocena</label>
                    <FormTextarea type="number" value={currentReport.objectRate} disabled="true"/>
                  </Col>
                </Row>
                : null}

                {currentReport.type == "comment" ? 
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Treść komentarza</label>
                  <FormTextarea rows="5" value={currentReport.objectContent} onChange={updateContent}  disabled="true"/>
                </Col>
                : null}
            </Form>
          </CardBody>
          
        </Card>
      </Col>

    </Row>
  </Container>
)};

export default ReportInfo;
