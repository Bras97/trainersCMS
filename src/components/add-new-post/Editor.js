import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";
import ImageUploader from 'react-images-upload';

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";



function onDrop(picture) {
  this.setState({
      pictures: this.state.pictures.concat(picture),
  });
}

const Editor = () => (  
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" />
      <ImageUploader
                withIcon={true}
                buttonText='Wybierz zdjęcie'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
