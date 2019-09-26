/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";


import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { NavLink as Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

export default function UserDashboard() {
    return (
      <div>
        Login

        <MuiThemeProvider>
          <div>
            <Link 
              to="/admin/dashboard">
            <Button
              label="Submit"
              primary={true}
              style={style}
              >
              Iniciar Sesión
              </Button>    
            </Link>
            <Link 
              to="/auth/register">
            <Button
              label="Submit"
              primary={true}
              style={style}
              >
              Registrarse
              </Button>    
            </Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }


const style = {
  margin: 15
};