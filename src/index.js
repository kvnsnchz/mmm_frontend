/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import User from "layouts/User.js";
import Auth from "layouts/Auth.js";
import App from "layouts/App.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

function getRoleUser (onlyRole = false) {
  let user = localStorage.getItem('user') || '{}';
  user = JSON.parse(user);
  
  let layout = (user.role !== undefined) ? '/' + user.role : '/app';
  let redirect = (user.role !== undefined) ? layout + '/dashboard' : layout;

  if (onlyRole) return layout;

  return redirect;
}

function checkPath (props) {
  let path = props.location.pathname;
  let layout = getRoleUser(true);
  /** "/user/dashboard" */
  let check = path.includes(layout);
  
  return {redirect: layout, check: check};
}

const PrivateRoute = ({ component: Component, ...rest }) => {

  var {redirect, check} = checkPath(rest)
  return <Route {...rest} render={(props) => (
     check === true
      ? <Component {...props} />
      : <Redirect to={redirect} />
  )} />
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <PrivateRoute path="/app" component={App} />
      <PrivateRoute path="/auth" component={Auth} />
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/admin" component={Admin} />
      <Redirect from="/" to={getRoleUser()} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
