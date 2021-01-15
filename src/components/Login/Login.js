import React, { Component } from "react";
import "./style.css"
import DefaultLayout from "../../layouts/Default"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"

export default class Login extends Component {
    

    render() {
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

                <Link to="posts-list"><button type="submit" className="btn btn-primary btn-block">Zaloguj</button></Link>
                <p className="forgot-password text-right">
                    Zapomniałeś <Link to="#">hasła?</Link>
                </p>
                </div>
            </form>
        );
    }
}