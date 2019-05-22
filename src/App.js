import React, { Component } from "react";
import "./App.css";
import { apiClient } from "./apiClient";
import { GoogleLogin } from "react-google-login";

class App extends Component {
  onSuccess = response => {
    apiClient.post("/api/login/social/token_user/", {
      clientId:
        "261979616224-hj7bqbvikdktumnllno53c0op3e8b5oj.apps.googleusercontent.com",
      provider: "google-oauth2",
      code: response.code,
      redirectUri: "http://localhost:3000/"
    });
    console.log(response);
  };
  onFailure = response => {
    console.log(response);
  };
  render() {
    return (
      <div className="App">
        <h1>Wisp</h1>
        <GoogleLogin
          clientId="261979616224-hj7bqbvikdktumnllno53c0op3e8b5oj.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code"
          redirectUri="http://localhost:3000/"
        />
      </div>
    );
  }
}

export default App;
