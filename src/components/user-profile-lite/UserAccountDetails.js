import React from "react";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as authorizationThunks from '../../redux/Authorization/thunks';
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
  Button,
  FormSelect
} from "shards-react";
import { editCurrentUser } from "../../redux/CurrentUser/actions";
import kyClient from "../../api/kyClient";
import {
  readAuthorizationUserFromLocalStorage,
  saveAuthorizationUserInLocalStorage
} from "../../redux/Authorization/utils";
import {
  setAuthorizationUser,
  setError
} from "../../redux/Authorization/actions";
import CreatableSelect from 'react-select/creatable';
import * as facultiesThunks from "../../redux/Faculties/thunks";
import * as citiesThunks from "../../redux/Cities/thunks";

const UserAccountDetails = ({ title }) => {

  const {currentUsers} = useSelector(state => state.currentUsers);
  const {users} = useSelector(state => state.users);
  const {cities} = useSelector(state => state.cities);
  const {faculties} = useSelector(state => state.faculties);
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();
  const [showMode, setShowMode] = useState(false);
  const [currentAvatarFile, setCurrentAvatarFile] = useState(null);
  const { authorization } = useSelector(state => state.authorizationUsers);
  const [temporaryImage, setTemporaryImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (authorization != null) {
        dispatch(facultiesThunks.fetchFaculties());
        dispatch(citiesThunks.fetchCities());
    }
  }, [authorization, currentUser]);

  useEffect(() => {
      if (id) {
          const user = users.find(user => user._id == id);
          setCurrentUser(user);
          setShowMode(true);
      }
      else if(authorization){
        console.log(authorization)
        setCurrentUser(authorization.user);
      }
  }, [id, users]);




  const updateName = e => {

    const userDetails = currentUser.userDetails
    userDetails.firstName = e.target.value

    setCurrentUser({
      ...currentUser,
      userDetails: userDetails
    });
  };

  const updateSurname = e => {

    const userDetails = currentUser.userDetails
    userDetails.lastName = e.target.value
    setCurrentUser({
      ...currentUser,
      userDetails: userDetails
    });
  };

  const updateEmail = e => {
    setCurrentUser({
      ...currentUser,
      email: e.target.value
    });
  };


  const updateDescription = e => {

    const userDetails = currentUser.userDetails
    userDetails.description = e.target.value

    setCurrentUser({
      ...currentUser,
      userDetails: userDetails
    });
  };

  const updatePhone = e => {

    const userDetails = currentUser.userDetails
    userDetails.phone = e.target.value

    setCurrentUser({
      ...currentUser,
      userDetails: userDetails
    });
  };

  if(!currentUser){
    return <div></div>
  }

  const updateCity =  (newValue, actionMeta) => {
    const userDetails = currentUser.userDetails;
    userDetails.city = newValue.value;
    setCurrentUser({
      ...currentUser,
      userDetails: userDetails
    });
    console.log(currentUser)
  }

  const updateSpecs =  (newValue, actionMeta) => {
    console.log(newValue.map(value => value.value));
    const mappedValues = newValue.map(value => value.value);
    setCurrentUser({
      ...currentUser,
      specializations: mappedValues
    });
    console.log(currentUser)
  }

  const avatarUrl = (avatar) => {
    return `http://localhost:3000/avatars/${avatar}`;
  }

  const handleSubmit = async (e) => {
    if(currentUser.userDetails.firstName == null || currentUser.userDetails.firstName == "" ||
    currentUser.userDetails.lastName == null || currentUser.userDetails.firslastNametName == "" ||
    currentUser.userDetails.phone == null || currentUser.userDetails.phone == ""){
      setIsError(true);
      setIsSaved(false)
      setErrorMessage("Dane nie mogą być puste");
    }
    else{
      setIsError(false);
    currentUser.userDetails.specializations = currentUser.specializations;
    e.preventDefault();
    await dispatch(authorizationThunks.updateUser(currentUser.userDetails));

    if (currentAvatarFile) {
      const formData = new FormData();
      formData.append('avatar', currentAvatarFile);
      const response = await kyClient.post('user/avatar', {
        body: formData
      });
      const user = await response.json();
      const authorizationUser = JSON.parse(readAuthorizationUserFromLocalStorage());
      authorizationUser.user = user
      console.log("New avatar: ", user.userDetails.avatar);
      setCurrentUser({
        ...currentUser,
        userDetails: user.userDetails
      });
      if (user) {
        dispatch(setAuthorizationUser(authorizationUser));
        dispatch(setError(false));
        saveAuthorizationUserInLocalStorage(authorizationUser);
      }
    }
    setTemporaryImage(false)
    setIsSaved(true)
      
  }

  }

  const handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    if(file.size < 5 * 1024){
      setCurrentAvatarFile(file);
  
      reader.onloadend = () => {
        const userDetails = currentUser.userDetails;
        userDetails.avatar = reader.result;
        setCurrentUser({
          ...currentUser,
          userDetails: userDetails
        });
      }
  
      setTemporaryImage(true);
      reader.readAsDataURL(file)
    }
    else{
      setIsError(true)
      setErrorMessage("Za duży rozmiar zdjęcia");
    }
  }


  return(

  <Card small className="mb-4">

    <Alert isOpen={isSaved}>Pomyślnie zapisano zmiany</Alert>
    <Alert isOpen={isError} color="danger">{errorMessage}</Alert>
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
                    defaultValue={currentUser.userDetails.firstName}
                    onChange={updateName}
                    placeholder="Imię"
                    disabled={showMode}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Nazwisko</label>
                  <FormInput
                    placeholder="Nazwisko"
                    defaultValue={currentUser.userDetails.lastName}
                    onChange={updateSurname}
                    disabled={showMode}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    disabled="true"
                    type="email"
                    placeholder="Adres email"
                    defaultValue={currentUser.email}
                    onChange={updateEmail}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Telefon</label>
                  <FormInput
                    type="number"
                    placeholder="Telefon"
                    defaultValue={currentUser.userDetails.phone}
                    onChange={updatePhone}
                    disabled={showMode}
                  />
                </Col>
              </Row>
              {authorization.user.type == "TRAINER" ?
              <div>
              <Row form>
                {/* City */}
                <Col md="12" className="form-group">
                  <label htmlFor="feCity">Miasto</label>
                    <CreatableSelect
                      onChange={updateCity}
                      defaultValue={{label: currentUser.userDetails.city, value: currentUser.userDetails.city}}
                      options={cities.map(city => {
                        const container = {};                    
                        container.label = city               
                        container.value = city                    
                        return container;
                    }
                      )}
                      disabled={showMode}
                    />
                </Col>
              </Row>
              <Row form>
                {/* City */}
                <Col md="12">
                  <label htmlFor="feSpec">Specjalizacje</label>
                    <CreatableSelect
                      isMulti
                      onChange={updateSpecs}
                      defaultValue={currentUser.specializations.map(faculty => {
                        const container = {};                    
                        container.label = faculty               
                        container.value = faculty                    
                        return container;
                    }

                      )}
                      options={faculties.map(faculty => {
                        const container = {};                    
                        container.label = faculty               
                        container.value = faculty                    
                        return container;
                    }
                      )}
                      disabled={showMode}
                    />
                </Col>
              </Row>
                
              </div> : null}
              <Row form>
                {/* Description */}
              {authorization.user.type == "TRAINER" ?
                <Col md="8" className="form-group mt-2">
                  <label htmlFor="feDescription">Opis</label>
                  <FormTextarea rows="7"
                    defaultValue={currentUser.userDetails.description}
                    onChange={updateDescription}
                    disabled={showMode}/>
                </Col> : <Col md="8"></Col>}
                <Col className="form-group">
                  <CardHeader className="text-center" >
                    <div className="mb-3 mx-auto">
                      <img
                        className="rounded-circle"
                        src={temporaryImage ? currentUser.userDetails.avatar : avatarUrl(currentUser.userDetails.avatar)}
                        alt={currentUser.userDetails.name}
                        width="110"
                        height="110"
                      />
                      <label className="ml-3">Max: 5MB</label>
                    </div>

                    <div className="text-center"  style={{maxWidth: "400px"}}>
                      <FormInput className="mb-2 text-center" style={{color: "green", maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"}} type="file" onChange={handleImageChange}
                    disabled={showMode}/>
                    </div>
                  </CardHeader>
                  </Col>
              </Row>
              <div className="text-center">
                <Button theme="accent"
                onClick={handleSubmit}
                disabled={showMode}>
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
