import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";
import ImageUploader from 'react-images-upload';

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";



const Editor = ({}) => {  

  const [picture, setPicture] = useState("");

  const handleOnDrop = (files, pictures) => {
    setPicture(pictures[0])
  }

  console.log(picture)


  return(
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3" placeholder="Tytuł posta" />
          <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis posta" />
          <ImageUploader
                    withIcon={true}
                    buttonText='Wybierz zdjęcie'
                    onChange={(files, pictures) => handleOnDrop(files, pictures)}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    singleImage={true}
                    maxFileSize={5242880}
                />
          <img src={picture} style={{ maxWidth: "100%" }}/>
        </Form>
      </CardBody>
    </Card>
  )
};

export default Editor;
