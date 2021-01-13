import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button } from "shards-react";
import {useDispatch, useSelector} from "react-redux"
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import {addPost, updateMaxIndex} from "../redux/Posts/actions";
import { Post } from "../redux/Posts/types";
import ImageUploader from 'react-images-upload';

const AddNewPost = () => {


  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const {posts} = useSelector(state => state.posts);
  
  const handleOnDrop = (files, pictures) => {
    setImage(pictures[0]);
  }

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
                <Link to="/posts-list">
                  <Button  theme="accent" size="lg"
                  onClick={()=> 
                    {
                      const newIndex = parseInt(posts[posts.length-1].id)+1;
                      dispatch(addPost(new Post(newIndex.toString(), title, content, image)));
                      console.log("Image: ", image);}               
                  }>
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
