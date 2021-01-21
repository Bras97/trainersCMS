import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editPost} from "../redux/Posts/actions";
import ImageUploader from 'react-images-upload';

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";

const EditPost = () => {
  
  const {posts} = useSelector(state => state.posts);
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      if (id) {
          const post = posts.find(post => post.id == parseInt(id));
          setCurrentPost(post);
      }
  }, [id, posts]);
  

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
    setCurrentPost({
      ...currentPost,
      image: pictures[0]
    })
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
          onClick={()=> dispatch(editPost(currentPost))}>
          
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
                  <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" defaultValue={currentPost.title} onChange={updateTitle}></FormInput>
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
              <img src={currentPost.image} style={{ width: "100%" }}/>
            </Form>
          </CardBody>
          
        </Card>
      </Col>

    </Row>
  </Container>
)};

export default EditPost;
