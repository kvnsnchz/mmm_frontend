import React from "react";
import { Redirect } from "react-router-dom";
export class AuthRequired extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    if (typeof props.redirectTo !== "undefined") {
      cookies.set("authRedirectTo", props.redirectTo, {
        path: "/",
        expires: new Date(Date.now() + 10000)
      });
    }
  }
  render() {
    if (typeof this.state.validAuthToken === "undefined") {
      return <Redirect to="/validate-auth-token" />;
    } else {
      return this.props.orRender;
    }
  }
}
export default AuthRequired;
