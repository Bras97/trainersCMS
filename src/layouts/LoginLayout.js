import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import HomeLogin from "../components/Login/HomeLogin"

const LoginLayout = ({ children }) => (
    <Container fluid>
      <HomeLogin />
      {children}
    </Container>
);


export default LoginLayout;
