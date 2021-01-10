import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";

import PageTitle from "../components/common/PageTitle";

const EventsList = () => {

  const {events} = useSelector(state => state.events);
  console.log(events);

  return(

  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista wydarzeń" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Wydarzenia</h4>
            <h6 className="m-0 mt-1"><a href="/add-new-event">Dodaj nowe wydarzenie</a></h6>
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
                    Data
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
                {events.map(event => 
                  <tr>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td style={{maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    }}>{event.content}</td>
                    <td> <a href={"edit-event/" + event.id}><FaPen /></a> &ensp; <a href="/posts-list"><FaTrashAlt /> </a></td>
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

export default EventsList;
