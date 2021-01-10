import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col } from "shards-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";
import DateComponent from "../components/add-new-post/DateComponent";

const EditEvent = () => {
  
  
  const {events} = useSelector(state => state.events);
  const { id } = useParams();
  const [currentEvent, setCurrentEvent] = useState();

  useEffect(() => {
      if (id) {
          const event = events.find(event => event.id == parseInt(id));
          setCurrentEvent(event);
      }
  }, [id, events]);

  if(!currentEvent){
    return <div></div>
  }

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Dodaj nowe wydarzenie" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-event">
          <FormInput size="lg" className="mb-3" placeholder="Nazwa wydarzenia" value={currentEvent.title}/>
          <div className="mb-3 d-flex justify-content-start align-self-center">
          <h6 className="mt-1 mr-3">Data wydarzenia: </h6><DateComponent size="lg" value={currentEvent.date}/>
          </div>
          <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" value={currentEvent.content} />
          <Editor />
          <div class="text-center mt-3">
            <Button theme="accent" size="lg">
              <i className="material-icons">file_copy</i> Zatwierdź
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
      </Col>

    </Row>
  </Container>
)};

export default EditEvent;
