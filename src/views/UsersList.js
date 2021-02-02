import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";


import PageTitle from "../components/common/PageTitle";
import { deleteUser } from "../redux/Users/actions";
import * as usersThunks from "../redux/Users/thunks";
import { useHttpErrorHandler } from '../utils/hooks/useHttpErrorHandler';
import { Redirect } from "react-router-dom";

const UsersList = () => {

  const {users} = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const handler = useHttpErrorHandler();
  const { authorization } = useSelector(state => state.authorizationUsers);

  if(authorization != null && authorization.user != null && (authorization.user.type == "USER" || authorization.user.type == "TRAINER")){
    return <Redirect to="/login" /> 
  }

  useEffect(() => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
        dispatch(usersThunks.fetchUsers(handler));
    }
  }, [authorization]);

  const handleDeleteUser = (selectedUser) => {
    if (authorization != null && authorization.user != null && authorization.user._id != null) {
      console.log("SELECTED ID:", selectedUser)
        dispatch(usersThunks.deleteUserFromDatabase(selectedUser));
      }
  };

  if(!users){
    return <div></div>
  }

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
                {users.map((user, idx) => 
                  <tr key={idx+1}>
                  <td>{idx+1}</td>
                    <td>{user.userDetails.firstName}</td>
                    <td>{user.userDetails.lastName}</td>
                    <td>{user.type}</td>
                    <td> <Link to={"user-profile/" + user._id}><FaInfoCircle /></Link> &ensp;<Link onClick={() => handleDeleteUser(user)}><FaTimesCircle /></Link></td>
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
