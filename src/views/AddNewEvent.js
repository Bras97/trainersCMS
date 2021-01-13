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
import {DatePicker} from "shards-react";
import ImageUploader from 'react-images-upload';

const AddNewEvent = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState();
  const {events} = useSelector(state => state.events);

  const handleOnDrop = (files, pictures) => {
    setImage(pictures[0]);
  }
  
  const updateDate = date => {
    setDate(date);
  };

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
          <h6 className="mt-1 mr-3">Data wydarzenia: </h6>
          <DatePicker
            selected={date} 
            onChange={updateDate} 
            dateFormat="DD-MM-YYYY hh:mm"
            showTimeSelect
            />
          </div>
          <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" onChange={e => setContent(e.target.value)} />
          
          <ImageUploader
                        withIcon={true}
                        buttonText='Wybierz zdjęcie'
                        onChange={(files, pictures) => handleOnDrop(files, pictures)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        singleImage={true}
                        maxFileSize={5242880}
                    />
              <img src={image} style={{ maxWidth: "100%" }}/>

          <div className="text-center mt-3">  
            <Link to="/events-list">
              <Button  theme="accent" size="lg"
              onClick={()=> {
                const newIndex = parseInt(events[events.length-1].id)+1;
                dispatch(addEvent(new Event(newIndex, title, date, content, image)));                
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
