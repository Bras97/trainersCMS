import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";

import PageTitle from "../components/common/PageTitle";

const TariffsList = () => (
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
            <h6 className="m-0 mt-1"><a href="/add-new-tariff">Dodaj nowy cennik</a></h6>
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
                <tr>
                  <td>1</td>
                  <td>1h personalny trening</td>
                  <td >Pływanie</td>
                  <td >60 zł</td>
                  {/* <td>{{quiz.Internal.quizName | limitChars:20}}</td> */}
                  <td> <a href="/add-new-tariff"><FaPen /></a> &ensp; <FaTrashAlt /> </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1h personalny trening</td>
                  <td>Bieganie</td>
                  <td>50 zł</td>
                  <td> <a href="/add-new-tariff"><FaPen /></a> &ensp; <FaTrashAlt /> </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default TariffsList;
