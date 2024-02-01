import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
console.log("hej", process.env.REACT_APP_USER_POOL_ID);

/* const awsConfig = {
  Auth: {
    region: process.env.REACT_APP_USER_POOL_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    authenticationFlowType: "USER_SRP_AUTH",
  },
  Analytics: {
    disabled: true,
  },
}; */
console.log("awsConfig", awsConfig);
Amplify.configure(awsConfig);

function App() {
  const callApi = async (user) => {
    console.log("user", user);
    try {
      const response = await fetch(
        "https://c8bftx3q3j.execute-api.eu-north-1.amazonaws.com/dev/example",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
          },
        }
      );

      const data = await response.json();
      console.log(data); // Log to console
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello {user.username}! Welcome to the app gondolf.</p>
            <button onClick={() => callApi(user)}>API</button>
            <button onClick={signOut}>Sign out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
