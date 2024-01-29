import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
/* import awsConfig from "./aws-exports"; */
import { Authenticator } from "@aws-amplify/ui-react";
console.log("hej", process.env.REACT_APP_USER_POOL_ID);

const awsConfig = {
  Auth: {
    region: "eu-central-1",
    userPoolId: "eu-north-1_MrFc1F4Q0",
    userPoolWebClientId: "7gec29f0hhna8qvu56booall7s",
    authenticationFlowType: "USER_SRP_AUTH",
  },
  Analytics: {
    disabled: true,
  },
};

Amplify.configure(awsConfig);

function App() {
  const callApi = async (user) => {
    console.log("user", user);
    try {
      const response = await fetch(
        "https://0gvuopt830.execute-api.eu-north-1.amazonaws.com/dev/example",
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
            <p>Hello {user.username}! Welcome to the app.</p>
            <button onClick={() => callApi(user)}>API</button>
            <button onClick={signOut}>Sign out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
