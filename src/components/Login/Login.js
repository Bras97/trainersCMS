import React, { Component, useState, useEffect } from "react";
import "./styleForLogin.css"
import { Link } from "react-router-dom"
import { setUserLoggedStatus} from "../../redux/Users/actions"
import {useDispatch, useSelector} from "react-redux"
import * as authorizationThunks from '../../redux/Authorization/thunks';
import {Alert} from "reactstrap"
import { Button } from "shards-react";
import { Redirect } from "react-router-dom";
import EventsList from "../../views/EventsList"

const Login = () => {


    const {users} = useSelector(state => state.users);
    const { authorization, pending, error } = useSelector(state => state.authorizationUsers);
    // const values = {
    //     email: "",
    //     password: ""
    // }
    const [values, setValues] = useState();
    const dispatch = useDispatch();
    const handleOnSubmit = () => {
        dispatch(authorizationThunks.login(values))
    }

    if (authorization && authorization.token) {
        return <Redirect to="events-list" />
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

    return (
        <form className="row justify-content-center" style={{marginTop: "100px"}}>
            <div className="col-4">
            {(error) && <Alert color="warning" severity="error">Błędny email lub hasło</Alert>}
            <h3>Zaloguj się</h3>

            <div className="form-group">
                <label>Adres email</label>
                <input type="email" className="form-control" placeholder="Adres email" onChange={updateEmail} />
            </div>

            <div className="form-group">
                <label>Hasło</label>
                <input type="password" className="form-control" placeholder="Hasło" onChange={updatePassword} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Zapamiętaj mnie</label>
                </div>
            </div>

            <Button className="btn btn-primary btn-block"
            onClick={handleOnSubmit}
                >Zaloguj</Button>
            <p className="forgot-password text-right">
                Zapomniałeś <Link to="#">hasła?</Link>
            </p>
            </div>
        </form>
    );
    
}

export default Login;