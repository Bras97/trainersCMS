import React from "react";
import {useState, useEffect} from "react";
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
import * as tariffThunks from "../redux/Tariffs/thunks";
import { Redirect } from "react-router-dom";
import * as facultiesThunks from "../redux/Faculties/thunks";
import {Alert} from "reactstrap"


const AddNewTariff = () => {


const dispatch = useDispatch();
const [title, setTitle] = useState();
const [price, setPrice] = useState();
const [category, setCategory] = useState();
const {tariffs} = useSelector(state => state.tariffs);
const {faculties} = useSelector(state => state.faculties);
const [isError, setIsError] = useState(false);
const [backToList, setBackToList] = useState(false);
const [errorMessage, setErrorMessage] = useState("");


const { authorization } = useSelector(state => state.authorizationUsers);

if(authorization != null && authorization.user != null && (authorization.user.type == "USER" || authorization.user.type == "ADMIN")){
  return <Redirect to="/login" /> 
}

const handleNewTariff = () => {
  if (authorization != null && authorization.user != null && authorization.user._id != null) {
      if(price == null || price <= 0){
        setErrorMessage("Zła wartość cennika");
        setIsError(true);
      }
      else if(title == null || title == ""){
        setErrorMessage("Brak nazwy");
        setIsError(true);
      }
      else{
        setIsError(false);
        if(category == null){
          tariffs.push(new Tariff(title, price, faculties[0]));
        }
        else{
          tariffs.push(new Tariff(title, price, category));
        }
        dispatch(tariffThunks.addTariffToDatabase(tariffs)).then(() => {
          setBackToList(true);
        });;
      }
    }
};

useEffect(() => {
  if (authorization != null) {
      dispatch(facultiesThunks.fetchFaculties());
  }
}, [authorization]);


if(backToList==true){
  return <Redirect to="/tariffs-list" />
}


return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4 d-flex justify-content-between">
      <PageTitle sm="4" title="Dodaj nową cenę" subtitle="Blog Tariffs" />
        <Button  theme="accent" size="lg" onClick={handleNewTariff}>
        <i className="material-icons">file_copy</i> Zatwierdź
        </Button>
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
      <Card small className="mb-3">
      <Alert isOpen={isError} color="danger">{errorMessage}</Alert>
      <CardBody>
        <Form className="add-new-tariff">
          <FormInput size="lg" className="mb-3" placeholder="Nazwa"  onChange={e => setTitle(e.target.value)}/>
          <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>Kategorie</InputGroupText>
            </InputGroupAddon>
            <FormSelect onChange={e => setCategory(e.target.value)}>
              {faculties.map(faculty => 
                <option>{faculty}</option>
              )}
            </FormSelect>
          </InputGroup>
          <FormInput 
          type="number" 
          size="lg" 
          className="mb-3" 
          placeholder="Cena"  
          onChange={e => setPrice(e.target.value)}
          min="1"
          />
          
        </Form>
      </CardBody>
    </Card>
      </Col>
    </Row>
  </Container>
)};

export default AddNewTariff;
