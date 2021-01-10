import React from "react";
import {useEffect, useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button } from "shards-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";

const EditPost = () => {
  
  const {posts} = useSelector(state => state.posts);
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();

  useEffect(() => {
      if (id) {
        
          const post = posts.find(post => post.id == parseInt(id));
          setCurrentPost(post);
      }
  }, [id, posts]);
  
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
              <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" value={currentPost.title}></FormInput>
              <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis posta" value={currentPost.content} />
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

export default EditPost;
