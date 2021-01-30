import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom"
import "./styleForLogin.css"
import { Button } from "shards-react";
import {useDispatch, useSelector} from "react-redux"
import * as authorizationThunks from '../../redux/Authorization/thunks';

const SignUp = () => {

    const { authorization, pending, error } = useSelector(state => state.authorizationUsers);
    const [values, setValues] = useState({phone: "",
    city: "",
    specializations: [],
    description: ""});
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

    return (
        <form class="row justify-content-center" style={{marginTop: "100px"}}>
        <div className="col-4">
            <h3>Zarejestruj się</h3>

            <div className="form-group">
                <label>Imię</label>
                <input type="text" className="form-control" placeholder="Imię" onChange={updateFirstName} />
            </div>

            <div className="form-group">
                <label>Nazwisko</label>
                <input type="text" className="form-control" placeholder="Nazwisko" onChange={updateLastName} />
            </div>

            <div className="form-group">
                <label>Adres email</label>
                <input type="email" className="form-control" placeholder="Adres email" onChange={updateEmail} />
            </div>

            <div className="form-group">
                <label>Hasło</label>
                <input type="password" className="form-control" placeholder="Hasło" onChange={updatePassword} />
            </div>

            <div className="form-group">
                <label>Typ użytkownika</label>
                <div onChange={updateUserType}>
                    <input type="radio" value="USER" name="userType"/> Użytkownik
                    <input className="ml-2" type="radio" value="TRAINER" name="userType"/> Trener
                </div>
            </div>

            <Button className="btn btn-primary btn-block"
            onClick={handleOnSubmit}>Zarejestruj się</Button>
            <p className="forgot-password text-right">
                Masz już <Link to="/login">konto?</Link>
            </p>
            </div>
        </form>
    );

}
export default SignUp;