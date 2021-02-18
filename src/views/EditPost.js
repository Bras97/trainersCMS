import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editPost} from "../redux/Posts/actions";
import ImageUploader from 'react-images-upload';
import * as postThunks from "../redux/Posts/thunks";
import { Post } from "../redux/Posts/types";
import { Redirect } from "react-router-dom";
import {Alert} from "reactstrap"

import PageTitle from "../components/common/PageTitle";

const featuredImageUrl = (featuredImage) => {
  return `http://localhost:3000/featured-images/${featuredImage}`;
}

const EditPost = () => {

  const {posts} = useSelector(state => state.posts);
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [backToList, setBackToList] = useState(false);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showMode, setShowMode] = useState(false);

  if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
    return <Redirect to="/login" /> 
  }

  useEffect(() => {
    if(authorization != null && authorization.user != null && authorization.user.type == "ADMIN"){
      setShowMode(true);
    }
  }, [authorization, currentPost]);


  const { authorization } = useSelector(state => state.authorizationUsers);
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  const handleEditPost = () => {
    console.log("!!!");
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      if(currentPost.title == null || currentPost.title == ""){
        setIsError(true);
        setErrorMessage("Brak tytułu");
      }
      else if(currentPost.content == null || currentPost.content == ""){
        setIsError(true);
        setErrorMessage("Brak opisu");
      }
      else{        
        setIsError(false);
        dispatch(postThunks.updatePostInDatabase
          ({title: currentPost.title, content: currentPost.content, eventDetails:null}, id, image)).then(() => {
            setBackToList(true);
          });
      }
    }
  };

  useEffect(() => {
      if (id) {
          const post = posts.find(post => post._id == id);
          setCurrentPost(post);        
      }
  }, [id, posts]);
  
  useEffect(() =>{
    if(authorization != null && authorization.user != null && authorization.user.type == "ADMIN"){
      dispatch(postThunks.fetchAllPosts())
    }
  },[authorization])

  const updateTitle = e => {
    setCurrentPost({
      ...currentPost,
      title: e.target.value
    });
  };

  const updateContent = e => {
    setCurrentPost({
      ...currentPost,
      content: e.target.value
    });
  };


  const updateImage = (files, pictures) => {
    setImage(files[0]);
    setImagePreview(pictures[0]);
  }

  if(!currentPost){
    return <div></div>
  }
  if(backToList==true){
    return <Redirect to="/posts-list" />
  }
  

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Edytuj post" subtitle="Blog Posts" className="text-sm-left" />
          <Button theme="accent" size="lg"
          onClick={handleEditPost}>
          <i className="material-icons">file_copy</i> Zatwierdź
        </Button>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <Card small className="mb-3">
          <Alert isOpen={isError} color="danger">{errorMessage}</Alert>
          <CardBody>
            <Form className="add-new-post">
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Tytuł</label>
                  <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" 
                  defaultValue={currentPost.title} onChange={updateTitle} disabled={showMode}
                  ></FormInput>
                </Col>
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea rows="5" placeholder="Opis posta" value={currentPost.content} onChange={updateContent} disabled={showMode} />
                </Col>
                {!showMode ? 
              <ImageUploader
                        withIcon={true}
                        buttonText='Wybierz zdjęcie'
                        onChange={(files, pictures) => updateImage(files, pictures)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        singleImage={true}
                        maxFileSize={5242880}
                        label="max: 5MB, formaty: jpg | gif | png"
                    /> : null}
              <img src={imagePreview || featuredImageUrl(currentPost.featuredImage)} style={{ width: "100%" }}/>
            </Form>
          </CardBody>

        </Card>
      </Col>

    </Row>
  </Container>
)};

export default EditPost;
