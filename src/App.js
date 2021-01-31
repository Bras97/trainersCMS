import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './redux/store/store';
import {Provider, useDispatch} from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import {fetchCurrentAuthorizationUser} from "./redux/Authorization/thunks";

const AuthLayer = ({ children }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCurrentAuthorizationUser());
  }, []);

  return children;
}

export default () => (
  <Provider store = {store}>
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        <AuthLayer>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </AuthLayer>
      </div>
    </Router>
    </Provider>
);
