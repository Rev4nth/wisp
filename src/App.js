import React, { Component } from "react";
import "./App.css";
import { apiClient } from "./apiClient";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

class App extends Component {
  state = {
    isAuthenticated: false,
    user: null,
    token: ""
  };
  logout = () => {
    this.setState({ isAuthenticated: false, token: "", user: null });
  };
  responseGoogle = response => {
    console.log(response);
    apiClient
      .post("/api/login/social/token_user/", {
        provider: "google",
        code: response.code
      })
      .then(responsed => console.log("heee"))
      .catch(error => console.log("uuuuuuu"));
  };
  handleClick = () => {
    apiClient
      .post("/api/login/social/token_user/", {
        provider: "google",
        code:
          "4/UgG_RQtPgGwis-ntfGbuaYA8lq2o4V3KMGzE1ompLE8FVo1TVe-45qqRSimGIxqvbiu90FdPcJUlgQYmkGpF0L8"
      })
      .then(responsed => console.log(responsed))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <h1>Wisp</h1>
        <GoogleLogin
          clientId="261979616224-hj7bqbvikdktumnllno53c0op3e8b5oj.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          responseType={"code"}
          redirectUri="http://localhost:3000/hello"
        />
        {this.state.isAuthenticated ? "Authenticated" : "Noooo"}
        <button onClick={this.handleClick}>heee</button>
      </div>
    );
  }
}

export default App;
