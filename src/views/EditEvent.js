import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editEvent} from "../redux/Events/actions";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";
import DateComponent from "../components/add-new-post/DateComponent";

const EditEvent = () => {
  
  
  const {events} = useSelector(state => state.events);
  const { id } = useParams();
  const [currentEvent, setCurrentEvent] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      if (id) {
          const event = events.find(event => event.id == parseInt(id));
          setCurrentEvent(event);
      }
  }, [id, events]);
  

  const updateTitle = e => {
    setCurrentEvent({
      ...currentEvent,
      title: e.target.value
    });
  };

  const updateDate = e => {
    setCurrentEvent({
      ...currentEvent,
      date: e.target.value
    });
  };

  const updateContent = e => {
    setCurrentEvent({
      ...currentEvent,
      content: e.target.value
    });
  };

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
          <FormInput size="lg" className="mb-3" placeholder="Nazwa wydarzenia" defaultValue={currentEvent.title} onChange={updateTitle} />
          <div className="mb-3 d-flex justify-content-start align-self-center">
          <h6 className="mt-1 mr-3">Data wydarzenia: </h6><DateComponent size="lg" defaultValue={currentEvent.date} onChange={updateDate} />
          </div>
          <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" defaultValue={currentEvent.content} onChange={updateContent} />
          <Editor />
          <div className="text-center mt-3">
                <Link to="/events-list">
            <Button theme="accent" size="lg" onClick={()=> dispatch(editEvent(currentEvent))}>
              <i className="material-icons">file_copy</i> Zatwierdź
            </Button>
            </Link>
          </div>
        </Form>
      </CardBody>
    </Card>
      </Col>

    </Row>
  </Container>
)};

export default EditEvent;
