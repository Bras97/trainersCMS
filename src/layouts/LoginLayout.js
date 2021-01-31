import React from "react";
import { Container } from "shards-react";

import HomeLogin from "../components/Login/HomeLogin"

const LoginLayout = ({ children }) => (
    <Container fluid>
      <HomeLogin />
      {children}
    </Container>
);


export default LoginLayout;
