import axios from "axios";

function PostUser(params) {
  console.log(params);
  const new_user = {
    firstname: params.firstname,
    lastname: params.lastname,
    email: params.email,
    password: params.password,
  };
  return axios({
    method: "POST",
    url: "http://localhost:3006",
    data: new_user,
  });
}
export default PostUser;
