import axios from "axios";

const APIprefix = "http://localhost:5000";

function postPosts(body, config) {
  return axios.post(`${APIprefix}/posts`, body, config);
}

export { postPosts };
