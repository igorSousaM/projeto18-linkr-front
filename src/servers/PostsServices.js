import axios from "axios";

/* https://api-linkr-back.onrender.com */

const APIprefix = "http://localhost:5000";

function postPosts(body, config) {
  return axios.post(`${APIprefix}/posts`, body, config);
}

function getPosts(config) {
  return axios.get(`${APIprefix}/timeline`, config);
}

function deletePost(id,config){
    return axios.delete(`${APIprefix}/posts/${id}`, config);
}

export { postPosts, getPosts, deletePost };
