const awsExports = {
  Auth: {
    region: process.env.REACT_APP_USER_POOL_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    authenticationFlowType: "USER_SRP_AUTH",
  },
  Analytics: {
    disabled: true,
  },
};

export default awsExports;
