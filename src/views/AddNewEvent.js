import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";
import DateComponent from "../components/add-new-post/DateComponent";
import {addEvent} from "../redux/Events/actions";
import { Event } from "../redux/Events/types";

const AddNewEvent = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const {events} = useSelector(state => state.events);
  

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
          <FormInput size="lg" className="mb-3" placeholder="Nazwa wydarzenia" onChange={e => setTitle(e.target.value)} />
          <div className="mb-3 d-flex justify-content-start align-self-center">
          <h6 className="mt-1 mr-3">Data wydarzenia: </h6><DateComponent size="lg"/>
          </div>
          <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" onChange={e => setContent(e.target.value)} />
          <Editor />
          <div className="text-center mt-3">  
            <Link to="/events-list">
              <Button  theme="accent" size="lg"
              onClick={()=> {
                dispatch(addEvent(new Event(events.length+1, title, date, content, image)));                
              }}>
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

export default AddNewEvent;
