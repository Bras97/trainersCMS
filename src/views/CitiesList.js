import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, FormInput, Button } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {addCity} from "../redux/Cities/actions";
import { Redirect } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import { deleteCity } from "../redux/Cities/actions";
import * as citiesThunks from "../redux/Cities/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';

const CitiesList = () => {

  const {cities} = useSelector(state => state.cities);
  const [ cityName, setCityName ] = useState();
  const isLogged = false;
  console.log(cities);
  const dispatch = useDispatch();

  const { authorization } = useSelector(state => state.authorizationUsers);

  useEffect(() => {
    if (authorization != null) {
        dispatch(citiesThunks.fetchCities());
    }
  }, [authorization]);

  if(authorization != null && authorization.user != null && (authorization.user.type == "USER" || authorization.user.type == "TRAINER" )){
    return <Redirect to="/login" /> 
  }

  const updateCityName = e => {
    setCityName(e.target.value);
  }

  // if(!isLogged){
  //   return <Redirect to="/login" /> 
  // }

  return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista miast" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Miasta</h4>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nazwa miasta
                  </th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, index) => 
                  <tr>
                    <td>{index+1}</td>
                    <td>{city}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
)};

export default CitiesList;
