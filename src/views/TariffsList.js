import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import PageTitle from "../components/common/PageTitle";
import { deleteTariff } from "../redux/Tariffs/actions";
import * as tariffsThunks from "../redux/Tariffs/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';
import { Redirect } from "react-router-dom";

const TariffsList = () => {

  const {tariffs} = useSelector(state => state.tariffs);
  const dispatch = useDispatch();

  const handler = useHttpErrorHandler();
  const { authorization } = useSelector(state => state.authorizationUsers);

  if(authorization != null && authorization.user != null && (authorization.user.type == "USER" || authorization.user.type == "ADMIN")){
    return <Redirect to="/login" /> 
  }

  useEffect(() => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(tariffsThunks.fetchTariffs(authorization.user._id, handler));
    }
  }, [authorization]);

  const handleDeleteTariff = (idx) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      console.log("0", tariffs);
        tariffs.splice(idx,1)
        dispatch(tariffsThunks.deleteTariffFromDatabase(tariffs));
      }
  };

  return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista cenników" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Cenniki</h4>
            <h6 className="m-0 mt-1"><Link to="/add-new-tariff">Dodaj nowy cennik</Link></h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nazwa
                  </th>
                  <th scope="col" className="border-0">
                    Kategoria
                  </th>
                  <th scope="col" className="border-0">
                    Cena
                  </th>
                  <th scope="col" className="border-0">
                    Narzędzia
                  </th>
                </tr>
              </thead>
              <tbody>
                {tariffs.map((tariff, idx) => 
                  <tr key={idx+1}>
                    <td>{idx+1}</td>
                    <td>{tariff.title}</td>
                    <td>{tariff.category}</td>
                    <td>{tariff.price} zł</td>
                    <td><Link onClick={() => handleDeleteTariff(idx)}><FaTrashAlt /> </Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
)};

export default TariffsList;
