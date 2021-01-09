import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import { Card, CardBody, Form, FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect } from "shards-react";

const AddNewTariff = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Dodaj nową cenę" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
      <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-tariff">
          <FormInput size="lg" className="mb-3" placeholder="Nazwa" />
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>Kategorie</InputGroupText>
            </InputGroupAddon>
            <FormSelect>
              <option>Bieganie</option>
              <option>Kolarstwo</option>
              <option>Pływanie</option>
              <option>Siłownia</option>
            </FormSelect>
          </InputGroup>
          <FormInput size="lg" className="mb-3" placeholder="Cena" />
        </Form>
      </CardBody>
    </Card>
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        <SidebarActions />
        <SidebarCategories />
      </Col>
    </Row>
  </Container>
);

export default AddNewTariff;
