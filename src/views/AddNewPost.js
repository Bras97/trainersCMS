import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button } from "shards-react";
import {useDispatch, useSelector} from "react-redux"
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import {addPost} from "../redux/Posts/actions";
import { Post } from "../redux/Posts/types";

const AddNewPost = () => {


  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const {posts} = useSelector(state => state.posts);
  

  console.log("Posts: ", posts)

  return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Dodaj nowy post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <Card small className="mb-3">
          <CardBody>
            <Form className="add-new-post">
              <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" onChange={e => setTitle(e.target.value)}/>
              <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis posta" onChange={e => setContent(e.target.value)} />
              <Editor />
              <div className="text-center mt-3">
                <Link to="/posts-list">
                  <Button  theme="accent" size="lg"
                  onClick={()=> {
                    const id = posts.length+1;
                    dispatch(addPost(new Post(posts.length+1, title, content, null)));                
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
  )
};

export default AddNewPost;
