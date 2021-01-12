import React from "react";
import {useState} from "react";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button } from "shards-react";
import {useDispatch, useSelector} from "react-redux"
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import {addPost} from "../redux/Posts/actions";

const AddNewPost = () => {

  
  function Post(id, title, content, image) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
  }

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
              <div class="text-center mt-3">
                <Button theme="accent" size="lg" href="/posts-list"
                  onClick={()=> {
                    const id = posts.length+1;
                    dispatch(addPost( {
                    type: 'POST',
                    title: title,
                    id: id,
                    content: content,
                    creator: 1,
                    comments: []
                }));
                }}>
                  <i className="material-icons">file_copy</i> Zatwierdź
                </Button>
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
