import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";


import PageTitle from "../components/common/PageTitle";
import { deleteUser } from "../redux/Users/actions";

const UsersList = () => {

  const {users} = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();

  return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista użytkowników" subtitle="Blog Users" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h4 className="m-0">Użytkownicy</h4>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Imię
                  </th>
                  <th scope="col" className="border-0">
                    Nazwisko
                  </th>
                  <th scope="col" className="border-0">
                    Typ użytkownika
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => 
                  <tr key={user.id}>
                  <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.type}</td>
                    <td> <Link to={"user-profile/" + user.id}><FaInfoCircle /></Link> &ensp;<Link onClick={() => dispatch(deleteUser(user))}><FaTimesCircle /></Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
    
  )
};

export default UsersList;
