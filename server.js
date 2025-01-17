// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

app.get("/status-info",(req,res)=>{
  console.log(req.query)

  let msg;

  switch(req.query.code){
    case "200":
      msg = "Request was successful.";
      break;
    case "201":
      msg = "A resource has been successfully created.";
      break;
    case "204":
      msg = "No Content: The server successfully processed the request, but no content is returned.";
      break;
    case "400":
      msg = "Bad Request: The request could not be understood or was missing required parameters.";
      break;
    case "401":
      msg = "Unauthorized: The request requires user authentication.";
      break;
    case "403":
      msg = "Forbidden: The server understood the request, but it refuses to authorize it.";
      break;
    case "404":
      msg = "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.";
      break;
    case "405":
      msg = "Method Not Allowed: The method specified in the request is not allowed for the resource identified by the request URI.";
      break;
    case "429":
      msg = "Too Many Requests: The user has sent too many requests in a given amount of time.";
      break;
    case "500":
      msg = "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.";
      break;
    case "502":
      msg = "Bad Gateway: The server, while acting as a gateway, received an invalid response from the upstream server it accessed to fulfill the request.";
      break;
    case "503":
      msg = "Service Unavailable: The server is currently unable to handle the request due to temporary overload or maintenance.";
      break;
    case "504":
      msg = "Gateway Timeout: The server, while acting as a gateway, did not receive a timely response from the upstream server.";
      break;

    default:
      msg="Unknown status code"
  }

  const response ={
    status: req.query.code,
    message: msg
  }

  res.json(response)
})


/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
