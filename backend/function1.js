// index.mjs
const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  // Your business logic goes here.

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    },
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};

export { handler };
