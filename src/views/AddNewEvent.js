import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";
import DateComponent from "../components/add-new-post/DateComponent";

const AddNewEvent = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Dodaj nowe wydarzenie" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-event">
          <FormInput size="lg" className="mb-3" placeholder="Nazwa wydarzenia" />
          <div className="mb-3 d-flex justify-content-start align-self-center">
          <h6 className="mt-1 mr-3">Data wydarzenia: </h6><DateComponent size="lg"/>
          </div>
          <FormInput className="mb-1" style={{minHeight: "200px"}} placeholder="Opis" />
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
);

export default AddNewEvent;
