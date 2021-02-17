import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col,Card, CardBody, Form, FormInput, Button, FormTextarea } from "shards-react";
import {useDispatch, useSelector} from "react-redux"
import PageTitle from "../components/common/PageTitle";
import {addPost} from "../redux/Posts/actions";
import { Post } from "../redux/Posts/types";
import ImageUploader from 'react-images-upload';
import * as postThunks from "../redux/Posts/thunks";
import { Redirect } from "react-router-dom";
import {Alert} from "reactstrap"

const AddNewPost = () => {


  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [backToList, setBackToList] = useState(false);
  const {posts} = useSelector(state => state.posts);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  if(authorization != null && authorization.user != null && authorization.user.type == "USER"){
    return <Redirect to="/login" /> 
  }

  const { authorization } = useSelector(state => state.authorizationUsers);

  const handleNewPost = async () => {
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
        dispatch(postThunks.addPostToDatabase(new Post(title,content, "POST", null, null), image)).then(() => {
          setBackToList(true);
        });
      }
    }
  };

  const handleOnDrop = (files, pictures) => {
    setImage(files[0]);
    setImagePreview(pictures[0]);
  }

  if(backToList==true){
    return <Redirect to="/posts-list" />
  }

  return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Dodaj nowy post" subtitle="Blog Posts" className="text-sm-left" />
        <Button  theme="accent" size="lg" onClick={handleNewPost}>
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
              <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" onChange={e => setTitle(e.target.value)}/>
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
  )
};

export default AddNewPost;
