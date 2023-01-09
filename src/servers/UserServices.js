import axios from "axios";

/* https://api-linkr-back.onrender.com */

const APIprefix = "http://localhost:5000";

function postSignup(signup) {
 
  return axios.post(`${APIprefix}/signup`, signup);
}

function getSignup(config) {
  return axios.get(`${APIprefix}/signup`, config);
}
function postSignin(signin) {
  return axios.post(`${APIprefix}/signin`, signin);
}

 

export {
  postSignup,
  postSignin,
  getSignup
};
