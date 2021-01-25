import React from "react";
import {useState} from "react";
import { Container, Row, Col } from "shards-react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import PageTitle from "../components/common/PageTitle";
import { Card, CardBody, Form, FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect, Button } from "shards-react";

import {addTariff} from "../redux/Tariffs/actions";
import { Tariff } from "../redux/Tariffs/types";


const AddNewTariff = () => {


const dispatch = useDispatch();
const [name, setName] = useState();
const [price, setPrice] = useState();
const [category, setCategory] = useState("Bieganie");
const {tariffs} = useSelector(state => state.tariffs);


return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Dodaj nową cenę" subtitle="Blog Tariffs" />
      <Link to="/tariffs-list">
        <Button  theme="accent" size="lg"
        onClick={()=> {
          const newIndex = parseInt(tariffs[tariffs.length-1].id)+1;
          dispatch(addTariff(new Tariff(newIndex, name, category, price)));                
        }}>
        <i className="material-icons">file_copy</i> Zatwierdź
        </Button>
      </Link>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-tariff">
          <FormInput size="lg" className="mb-3" placeholder="Nazwa"  onChange={e => setName(e.target.value)}/>
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>Kategorie</InputGroupText>
            </InputGroupAddon>
            <FormSelect onChange={e => setCategory(e.target.value)}>
              <option>Bieganie</option>
              <option>Kolarstwo</option>
              <option>Pływanie</option>
              <option>Siłownia</option>
            </FormSelect>
          </InputGroup>
          <FormInput type="number" size="lg" className="mb-3" placeholder="Cena"  onChange={e => setPrice(e.target.value)}/>
          
        </Form>
      </CardBody>
    </Card>
      </Col>
    </Row>
  </Container>
)};

export default AddNewTariff;
