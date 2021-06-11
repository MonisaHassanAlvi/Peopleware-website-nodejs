import axios from "axios";

function GetProjects(params) {
  return axios({ method: "GET", url: "http://localhost:3005" });
}
export default GetProjects;
