import React, { Component } from "react";
import "./styleForLogin.css"
import { Link } from "react-router-dom"
import { setUserLoggedStatus} from "../../redux/Users/actions"
import {useDispatch, useSelector} from "react-redux"

const Login = () => {
    
    
        const {users} = useSelector(state => state.users);
        const dispatch = useDispatch();
        return (
            <form class="row justify-content-center" style={{marginTop: "100px"}}>
              <div className="col-4">
                <h3>Zaloguj się</h3>

                <div className="form-group">
                    <label>Adres email</label>
                    <input type="email" className="form-control" placeholder="Adres email" />
                </div>

                <div className="form-group">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Hasło" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Zapamiętaj mnie</label>
                    </div>
                </div>

                <Link to="posts-list"><button type="submit" className="btn btn-primary btn-block"
                onClick={()=> dispatch(setUserLoggedStatus(true))}>Zaloguj</button></Link>
                <p className="forgot-password text-right">
                    Zapomniałeś <Link to="#">hasła?</Link>
                </p>
                </div>
            </form>
        );
    
}

export default Login;