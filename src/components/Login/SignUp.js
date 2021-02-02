import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom"
import "./styleForLogin.css"
import { Button, Row } from "shards-react";
import {useDispatch, useSelector} from "react-redux"
import * as authorizationThunks from '../../redux/Authorization/thunks';
import {Alert} from "reactstrap"

const SignUp = () => {

    const { authorization, pending, error } = useSelector(state => state.authorizationUsers);
    const [values, setValues] = useState({type: "USER"});
    const dispatch = useDispatch();

    const handleOnSubmit = () => {
        dispatch(authorizationThunks.register(values))
    }

    if (authorization && authorization.token) {
        return <Redirect to="posts-list" />
    }
        
  
    const updateEmail = e => {
        setValues({
          ...values,
          email: e.target.value
        });
      };
  
      const updatePhone = e => {
          setValues({
            ...values,
            phone: e.target.value
          });
        };
  

    const updatePassword = e => {
        setValues({
        ...values,
        password: e.target.value
        });
    };
  
    const updateFirstName = e => {
        setValues({
          ...values,
          firstName: e.target.value
        });
      };
  
      const updateLastName = e => {
          setValues({
            ...values,
            lastName: e.target.value
          });
        };
        
    const updateUserType = e => {
        setValues({
            ...values,
            type: e.target.value
        });
    }

    const updateCity = e => {
        setValues({
            ...values,
            city: e.target.value
        });
    }

    const updateSpec = e => {
        setValues({
            ...values,
            specializations: [e.target.value]
        });
    }

    const updateDescription = e => {
        setValues({
            ...values,
            description: e.target.value
        });
    }

    return (
        <form class="row justify-content-center" style={{marginTop: "100px"}}>
        <div className="col-8">
            {(error) && <Alert color="warning" severity="error">Wypełnij wszystkie dane</Alert>}
            <h3>Zarejestruj się</h3>

            <Row>
                <div className="form-group col-6">
                    <label>Imię</label>
                    <input type="text" className="form-control" placeholder="Imię" onChange={updateFirstName} />
                </div>

                <div className="form-group col-6">
                    <label>Nazwisko</label>
                    <input type="text" className="form-control" placeholder="Nazwisko" onChange={updateLastName} />
                </div>
            </Row>

            <Row>
                <div className="form-group col-6">
                    <label>Adres email</label>
                    <input type="email" className="form-control" placeholder="Adres email" onChange={updateEmail} />
                </div>

                <div className="form-group col-6">
                    <label>Nr telefonu</label>
                    <input type="number" className="form-control" placeholder="Nr telefonu" onChange={updatePhone} />
                </div>
            </Row>

            <Row>
        
                <div className="form-group col-6">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Hasło" onChange={updatePassword} />
                </div>

                <div className="form-group col-6 mt-3">
                    <label>Typ użytkownika</label>
                    <div onChange={updateUserType}>
                        <input type="radio" value="USER" name="userType" defaultChecked="true"/> Użytkownik
                        <input className="ml-2" type="radio" value="TRAINER" name="userType"/> Trener
                    </div>
                </div>
            </Row>

    {values.type == "TRAINER" ?
        <div>
            <Row>
                <div className="form-group col-6">
                    <label>Miasto</label>
                    <input type="text" className="form-control" placeholder="Miasto" onChange={updateCity} />
                </div>

                <div className="form-group col-6">
                    <label>Specjalizacja</label>
                    <input type="text" className="form-control" placeholder="Specjalizacja" onChange={updateSpec} />
                </div>
            </Row>
            <Row>
        
                <div className="form-group col-12">
                    <label>Opis</label>
                    <input type="text" className="form-control" placeholder="Opis" onChange={updateDescription} />
                </div>
            </Row>
            </div> : null}


            <Button className="btn btn-primary btn-block mt-4"
            onClick={handleOnSubmit}>Zarejestruj się</Button>
            <p className="forgot-password text-right">
                Masz już <Link to="/login">konto?</Link>
            </p>
            </div>
        </form>
    );

}
export default SignUp;