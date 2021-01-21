import React from "react";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {Alert} from "reactstrap"
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";
import { editUser } from "../../redux/Users/actions";

const UserAccountDetails = ({ title }) => {

  const {users} = useSelector(state => state.users);
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const user = users[0];
    setCurrentUser(user);
  }, [id, users]);

  
  const updateName = e => {
    setCurrentUser({
      ...currentUser,
      name: e.target.value
    });
  };
  
  const updateSurname = e => {
    setCurrentUser({
      ...currentUser,
      surname: e.target.value
    });
  };
  
  const updateEmail = e => {
    setCurrentUser({
      ...currentUser,
      email: e.target.value
    });
  };
  
  const updatePassword = e => {
    setCurrentUser({
      ...currentUser,
      password: e.target.value
    });
  };
  
  const updateCity = e => {
    setCurrentUser({
      ...currentUser,
      city: e.target.value
    });
  };

  const updateDescription = e => {
    setCurrentUser({
      ...currentUser,
      description: e.target.value
    });
  };

  if(!currentUser){
    return <div></div>
  }

  const updateAvatar = e => {
    setCurrentUser({
      ...currentUser,
      avatar: e.target.files[0]
    });
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  const handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setCurrentUser({
        ...currentUser,
        avatar: reader.result
      });
    }

    reader.readAsDataURL(file)
  }


  return(

  <Card small className="mb-4">

    <Alert isOpen={isSaved}>Pomyślnie zapisano zmiany</Alert>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Imię</label>
                  <FormInput 
                    defaultValue={currentUser.name} 
                    onChange={updateName}
                    id="feFirstName"
                    placeholder="Imię"
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Nazwisko</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Nazwisko"
                    defaultValue={currentUser.surname} 
                    onChange={updateSurname}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Adres email"
                    defaultValue={currentUser.email} 
                    onChange={updateEmail}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Hasło</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Hasło"
                    defaultValue={currentUser.password} 
                    onChange={updatePassword}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <Row form>
                {/* City */}
                <Col md="12" className="form-group">
                  <label htmlFor="feCity">Miasto</label>
                  <FormInput
                    id="feCity"
                    placeholder="Miasto"
                    defaultValue={currentUser.city} 
                    onChange={updateCity}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="8" className="form-group">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea id="feDescription" rows="7"
                    defaultValue={currentUser.description} 
                    onChange={updateDescription} />
                </Col>
                <Col className="form-group">
                  <CardHeader className="text-center" >
                    <div className="mb-3 mx-auto">
                      <img
                        className="rounded-circle"
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        width="110"
                        height="110"
                      />
                    </div>
                    
                    <form onSubmit={handleSubmit} className="text-center"  style={{maxWidth: "400px"}}>
                      <FormInput className="mb-2 text-center" style={{color: "green", maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"}} type="file" onChange={handleImageChange} />
                    </form>
                  </CardHeader>
                  </Col>
              </Row>
              <div className="text-center">
                <Button theme="accent"
                onClick={()=> {                
                dispatch(editUser(currentUser));
                setIsSaved(true)}}>
                Zaktualizuj dane</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>

)
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Szczegóły profilu"
};

export default UserAccountDetails;
