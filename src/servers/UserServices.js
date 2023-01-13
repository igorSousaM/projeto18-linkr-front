import axios from "axios";

const APIprefix = "https://api-linkr-back.onrender.com";

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
