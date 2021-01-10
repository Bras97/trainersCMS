import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";

import PageTitle from "../components/common/PageTitle";

const PostsList = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista postów" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Posty</h4>
            <h6 className="m-0 mt-1"><a href="/add-new-post">Dodaj nowy post</a></h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Tytuł
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
                <tr>
                  <td>1</td>
                  <td>Otwieramy siłownie!</td>
                  <td maxlength="20">Po zmniejszeniu obostrzeń możliwe jest...</td>
                  {/* <td>{{quiz.Internal.quizName | limitChars:20}}</td> */}
                  <td> <a href="/add-new-post"><FaPen /></a> &ensp; <FaTrashAlt /> </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nowe hantle Hantlex 4.0</td>
                  <td>Hantle Hantlex 4.0 to niebywały cud techniki...</td>
                  <td> <a href="/add-new-post"><FaPen /></a> &ensp; <FaTrashAlt /> </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default PostsList;
