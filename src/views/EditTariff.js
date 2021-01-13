import React from "react";
import { Container, Row, Col } from "shards-react";
import {useEffect, useState} from "react";

import PageTitle from "../components/common/PageTitle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardBody, Form, FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect, Button } from "shards-react";

const EditTariff = () =>  {
  
  const {tariffs} = useSelector(state => state.tariffs);
  const { id } = useParams();
  const [currentTariff, setCurrentTariff] = useState();

  useEffect(() => {
      if (id) {
        
          const tariff = tariffs.find(tariff => tariff.id == parseInt(id));
          setCurrentTariff(tariff);
      }
  }, [id, tariffs]);
  
  if(!currentTariff){
    return <div></div>
  }

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Dodaj nową cenę" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-tariff">
          <FormInput size="lg" className="mb-3" placeholder="Nazwa" value={currentTariff.title} />
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>Kategorie</InputGroupText>
            </InputGroupAddon>
            <FormSelect value={currentTariff.category}> 
              <option>Bieganie</option>
              <option>Kolarstwo</option>
              <option>Pływanie</option>
              <option>Siłownia</option>
            </FormSelect>
          </InputGroup>
          <FormInput size="lg" className="mb-3" placeholder="Cena" value={currentTariff.price} />
          <div className="text-center mt-3">
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

export default EditTariff;
