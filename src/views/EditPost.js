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
  const dispatch = useDispatch();

  if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
    return <Redirect to="/login" /> 
  }

  const { authorization } = useSelector(state => state.authorizationUsers);

  const handleEditPost = () => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(postThunks.updatePostInDatabase({title: currentPost.title, content: currentPost.content, eventDetails:null}, id, image));
      }
  };

  useEffect(() => {
      if (id) {
            console.log("ID: ", id);
            console.log("POSTS: ", posts);
            const post = posts.find(post => post._id == id);
            console.log("POST: ", post);
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


  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Edytuj post" subtitle="Blog Posts" className="text-sm-left" />
      <Link to="/posts-list">
        <Button theme="accent" size="lg"
          onClick={handleEditPost}>

          <i className="material-icons">file_copy</i> Zatwierdź
        </Button>
      </Link>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <Card small className="mb-3">
          <CardBody>
            <Form className="add-new-post">
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Tytuł</label>
                  <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" defaultValue={currentPost.title} onChange={updateTitle}
                  ></FormInput>
                </Col>
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea rows="5" placeholder="Opis posta" value={currentPost.content} onChange={updateContent} />
                </Col>
              <ImageUploader
                        withIcon={true}
                        buttonText='Wybierz zdjęcie'
                        onChange={(files, pictures) => updateImage(files, pictures)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        singleImage={true}
                        maxFileSize={5242880}
                    />
              <img src={imagePreview || featuredImageUrl(currentPost.featuredImage)} style={{ width: "100%" }}/>
            </Form>
          </CardBody>

        </Card>
      </Col>

    </Row>
  </Container>
)};

export default EditPost;
