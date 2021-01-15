import React from "react";
import { Container, Row, Col } from "shards-react";
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {editTariff} from "../redux/Tariffs/actions";

import PageTitle from "../components/common/PageTitle";
import { Card, CardBody, Form, FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect, Button } from "shards-react";

const EditTariff = () =>  {
  
  const {tariffs} = useSelector(state => state.tariffs);
  const { id } = useParams();
  const [currentTariff, setCurrentTariff] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      if (id) {
        
          const tariff = tariffs.find(tariff => tariff.id == parseInt(id));
          setCurrentTariff(tariff);
      }
  }, [id, tariffs]);
  

  const updateName = e => {
    setCurrentTariff({
      ...currentTariff,
      name: e.target.value
    });
  };

  const updateCategory = e => {
    setCurrentTariff({
      ...currentTariff,
      category: e.target.value
    });
  };

  const updatePrice = e => {
    setCurrentTariff({
      ...currentTariff,
      price: e.target.value
    });
  };

  if(!currentTariff){
    return <div></div>
  }

  return(
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Edytuj cenę" subtitle="Blog Tariffs" className="text-sm-left" />
      <Link to="/tariffs-list">
        <Button theme="accent" size="lg"
          onClick={()=> dispatch(editTariff(currentTariff))}>
          
          <i className="material-icons">file_copy</i> Zatwierdź
        </Button>
      </Link>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <CardBody>
        <Form className="edit-tariff">
          <label htmlFor="feDescription">Nazwa</label>
          <FormInput size="lg" className="mb-3" placeholder="Nazwa" defaultValue={currentTariff.name} onChange={updateName}/>
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>Kategorie</InputGroupText>
            </InputGroupAddon>
            <FormSelect defaultValue={currentTariff.category} onChange={updateCategory}> 
              <option>Bieganie</option>
              <option>Kolarstwo</option>
              <option>Pływanie</option>
              <option>Siłownia</option>
            </FormSelect>
          </InputGroup>
          <label htmlFor="feDescription">Cena</label>
          <FormInput size="lg" className="mb-3" placeholder="Cena" defaultValue={currentTariff.price} onChange={updatePrice}/>
        </Form>
      </CardBody>
    </Card>
      </Col>
    </Row>
  </Container>
)};

export default EditTariff;
