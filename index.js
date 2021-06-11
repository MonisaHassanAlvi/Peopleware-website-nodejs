const { response } = require("express");
const expressModule = require("express");
const app = expressModule();
const cors = require("cors");
app.use(expressModule.json());

var parsedJSON = require("./my_data.json");
var projects = parsedJSON.arr_withObjects;

app.options("/", cors());
app.get("/", (request, response) => {
  console.log("/projects page accessed");
  response.header("Access-Control-Allow-Origin", "*");
  response.send(projects);
});
app.listen(3005, () => {
  console.log("Server started: Listening at port 3005");
});
