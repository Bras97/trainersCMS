import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, FormInput, Button } from "shards-react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {addFaculty} from "../redux/Faculties/actions";

import PageTitle from "../components/common/PageTitle";
import { deleteFaculty } from "../redux/Faculties/actions";
import * as facultiesThunks from "../redux/Faculties/thunks";

const FacultiesList = () => {

  const {faculties} = useSelector(state => state.faculties);
  const [ facultyName, setFacultyName ] = useState();
  console.log(faculties);
  const dispatch = useDispatch();

  const { authorization } = useSelector(state => state.authorizationUsers);

  useEffect(() => {
    if (authorization != null) {
        dispatch(facultiesThunks.fetchFaculties());
    }
  }, [authorization]);


  const updateFacultyName = e => {
    setFacultyName(e.target.value);
  }
  return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista specjalności" subtitle="Blog Faculties" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Specjalności</h4>
            <h6 className="m-0 mt-1">Dodaj nową specjalność</h6>
            <Row md="12">
              <Col md="11">
                <FormInput value={facultyName}
                    onChange={updateFacultyName} ></FormInput>
              </Col>
              <Col md="1">
                <Button theme="accent" onClick={() => dispatch(addFaculty(facultyName))}>Dodaj</Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nazwa specjalności
                  </th>
                  <th scope="col" className="border-0">
                    Narzędzia
                  </th>
                </tr>
              </thead>
              <tbody>
                {faculties.map((faculty, index) => 
                  <tr>
                    <td>{index+1}</td>
                    <td>{faculty}</td>
                    <td><Link onClick={() => dispatch(deleteFaculty(faculty))}><FaTrashAlt /> </Link></td>
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

export default FacultiesList;
