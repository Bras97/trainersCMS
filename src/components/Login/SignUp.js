import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./styleForLogin.css"

export default class SignUp extends Component {
    render() {
        return (
            <form class="row justify-content-center" style={{marginTop: "100px"}}>
            <div className="col-4">
                <h3>Zarejestruj się</h3>

                <div className="form-group">
                    <label>Imię</label>
                    <input type="text" className="form-control" placeholder="Imię" />
                </div>

                <div className="form-group">
                    <label>Nazwisko</label>
                    <input type="text" className="form-control" placeholder="Nazwisko" />
                </div>

                <div className="form-group">
                    <label>Adres email</label>
                    <input type="email" className="form-control" placeholder="Adres email" />
                </div>

                <div className="form-group">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Hasło" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Zarejestruj się</button>
                <p className="forgot-password text-right">
                    Masz już <Link to="/login">konto?</Link>
                </p>
                </div>
            </form>
        );
    }
}