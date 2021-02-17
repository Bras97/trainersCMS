import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editEvent} from "../redux/Events/actions";
import * as eventThunks from "../redux/Events/thunks";
import { Event } from "../redux/Posts/types";

import PageTitle from "../components/common/PageTitle";
import { Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import {DatePicker} from "shards-react";
import ImageUploader from 'react-images-upload';
import { Redirect } from "react-router-dom";
import {Alert} from "reactstrap"

const featuredImageUrl = (featuredImage) => {
  return `http://localhost:3000/featured-images/${featuredImage}`;
}

const EditEvent = () => {


  const {events} = useSelector(state => state.events);
  const { id } = useParams();
  const [currentEvent, setCurrentEvent] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [backToList, setBackToList] = useState(false);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
    return <Redirect to="/login" /> 
  }



  const { authorization } = useSelector(state => state.authorizationUsers);

  const handleEditEvent = () => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      if(currentEvent.title == null || currentEvent.title == ""){
        setIsError(true);
        setErrorMessage("Brak tytułu");
      }
      else if(currentEvent.content == null || currentEvent.content == ""){
        setIsError(true);
        setErrorMessage("Brak opisu");
      }
      else{        
        setIsError(false);
        const eventDetails = {place: null, dateTime: currentEvent.eventDetails.dateTime}
        dispatch(eventThunks.updateEventInDatabase
          ({title: currentEvent.title, content: currentEvent.content, eventDetails:eventDetails}, id, image)).then(() => {
            setBackToList(true);
          });
        }
      }
  };

  useEffect(() => {
      if (id) {
          const event = events.find(event => event._id == id);
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
      eventDetails: {
        ...currentEvent.eventDetails,
        dateTime: e,
      }
    });
  };

  const updateContent = e => {
    setCurrentEvent({
      ...currentEvent,
      content: e.target.value
    });
  };

  const handleOnDrop = (files, pictures) => {
    setImage(files[0]);
    setImagePreview(pictures[0]);
  }


  if(!currentEvent){
    return <div></div>
  }
  if(backToList==true){
    return <Redirect to="/events-list" />
  }


  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Edytuj wydarzenie" subtitle="Blog Posts" className="text-sm-left" />
        <Button theme="accent" size="lg" onClick={handleEditEvent}>
          <i className="material-icons">file_copy</i> Zatwierdź
        </Button>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <Alert isOpen={isError} color="danger">{errorMessage}</Alert>
      <CardBody>
        <Form className="add-new-event">
          <Col md="12" className="form-group">
            <label htmlFor="feDescription">Nazwa</label>
            <FormInput size="lg" className="mb-3" placeholder="Nazwa wydarzenia" defaultValue={currentEvent.title} onChange={updateTitle} />
          </Col>
          <div className="mb-3 d-flex justify-content-start align-self-center">
          <h6 className="ml-3">Data: </h6>
          <DatePicker
            className="ml-3"
            selected={currentEvent.eventDetails.dateTime}
            onChange={updateDate}
            minDate={new Date()}
            dateFormat="dd-MM-YYYY hh:mm"
            showTimeSelect
            />
          </div>
          <Col md="12" className="form-group">
            <label htmlFor="feDescription">Opis</label>
            <FormTextarea rows="5" className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" defaultValue={currentEvent.content} onChange={updateContent} />
            </Col>
          <ImageUploader
              withIcon={true}
              buttonText='Wybierz zdjęcie'
              onChange={(files, pictures) => handleOnDrop(files, pictures)}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              singleImage={true}
              maxFileSize={5242880}
              label="max: 5MB, formaty: jpg | gif | png"
          />
          <img src={imagePreview || featuredImageUrl(currentEvent.featuredImage)} style={{ width: "100%" }}/>

        </Form>
      </CardBody>
    </Card>
      </Col>

    </Row>
  </Container>
)};

export default EditEvent;
