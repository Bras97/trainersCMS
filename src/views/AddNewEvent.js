import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import {addEvent} from "../redux/Events/actions";
import { Event } from "../redux/Events/types";
import {DatePicker} from "shards-react";
import ImageUploader from 'react-images-upload';
import { Post } from "../redux/Posts/types";
import { EventDetails } from "../redux/Events/types";
import * as eventThunks from "../redux/Events/thunks";
import { Redirect } from "react-router-dom";
import {Alert} from "reactstrap"

const AddNewEvent = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState("Poznań");
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [backToList, setBackToList] = useState(false);
  const {events} = useSelector(state => state.events);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
    return <Redirect to="/login" /> 
  }

  if(date.getMinutes() < 30 &&  !(date.getMinutes() == 0 && date.getSeconds() == 0)){
    date.setMinutes(30);
    date.setSeconds(0);
  }
  else if(date.getMinutes() > 30 || (date.getMinutes() == 30 && date.getSeconds() > 0)){
    date.setHours(date.getHours+1);
    date.setMinutes(0);
    date.setSeconds(0);
  }


  const handleOnDrop = (files, pictures) => {
    setImage(files[0]);
    setImagePreview(pictures[0]);
  }

  const updateDate = date => {
    setDate(date);
  };

  const { authorization } = useSelector(state => state.authorizationUsers);

  const handleNewEvent = () => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      if(title == null || title == ""){
        setIsError(true);
        setErrorMessage("Brak tytułu");
      }
      else if(content == null || content == ""){
        setIsError(true);
        setErrorMessage("Brak opisu");
      }
      else{        
        setIsError(false);
        const eventDetails = new EventDetails(place, date);
        dispatch(eventThunks.addEventToDatabase(new Post(title, content, "EVENT", null, eventDetails), image)).then(() => {
          setBackToList(true);
        });
      }
      }
  };

  if(backToList==true){
    return <Redirect to="/events-list" />
  }

  return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Dodaj nowe wydarzenie" subtitle="Blog Posts" className="text-sm-left" />
        <Button  theme="accent" size="lg"
        onClick={handleNewEvent}>
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
          <FormInput size="lg" className="mb-3" placeholder="Nazwa wydarzenia" onChange={e => setTitle(e.target.value)} />
          <div className="mb-3 d-flex justify-content-start align-self-center">
          <h6 className="mt-1 mr-3">Data wydarzenia: </h6>
          <DatePicker
            selected={date}
            onChange={updateDate}
            dateFormat="dd-MM-YYYY HH:mm"
            minDate={new Date()}
            showTimeSelect
            />
          </div>
          <FormTextarea rows="5" className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" onChange={e => setContent(e.target.value)} />           

          <ImageUploader
                        withIcon={true}
                        buttonText='Wybierz zdjęcie'
                        onChange={(files, pictures) => handleOnDrop(files, pictures)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        singleImage={true}
                        maxFileSize={5242880}
                        label="max: 5MB, formaty: jpg | gif | png"
                    />
              <img src={imagePreview} style={{ width: "100%" }}/>

        </Form>
      </CardBody>
    </Card>
      </Col>

    </Row>
  </Container>
)};

export default AddNewEvent;
