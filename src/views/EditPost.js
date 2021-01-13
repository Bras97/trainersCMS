import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button } from "shards-react";
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

  const updateImage = e => {
    setCurrentPost({
      ...currentPost,
      image: e.target.value[0]
    });
  };

  const handleOnDrop = (files, pictures) => {
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
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Edytuj post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <Card small className="mb-3">
          <CardBody>
            <Form className="add-new-post">
              <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" defaultValue={currentPost.title} onChange={updateTitle}></FormInput>
              <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis posta" value={currentPost.content} onChange={updateContent} />
              
              <ImageUploader
                        withIcon={true}
                        buttonText='Wybierz zdjęcie'
                        onChange={(files, pictures) => handleOnDrop(files, pictures)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        singleImage={true}
                        maxFileSize={5242880}
                    />
              <img src={currentPost.image} style={{ maxWidth: "100%" }}/>
        
              <div className="text-center mt-3">
                <Link to="/posts-list">
                <Button theme="accent" size="lg"
                  onClick={()=> dispatch(editPost(currentPost))}>
                  
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

export default EditPost;
