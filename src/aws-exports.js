const awsConfig = {
  Auth: {
    region: "eu-north-1", // e.g. us-east-1
    userPoolId: "eu-north-1_SAd4VLvwy", // e.g. us-east-1_XXXXXXX
    userPoolWebClientId: "6129ghrqvihlh6daj2hgc70noh", // e.g. XXXXXXXXXXXXXXXX
    // ... other configurations like identityPoolId if you're using it
  },
  // ... configurations for other services like Analytics, Interactions, etc.
};

export default awsConfig;
