import axios from "axios";


const APIprefix = "https://api-linkr-back.onrender.com";
//const APIprefix = "https://localshost/5000";


function postPosts(body, config) {
  return axios.post(`${APIprefix}/posts`, body, config);
}

function getPostsByHashtag(hashtag, config) {
  return axios.get(`${APIprefix}/hashtags/${hashtag}`, config);
}

function getPosts(config) {
  return axios.get(`${APIprefix}/timeline`, config);
}
function deletePost(id,config){
  return axios.delete(`${APIprefix}/posts/${id}`, config);
}

function postLike(body, config){
  return axios.post(`${APIprefix}/likes`, body, config);
}

function getHashtags(config){
  return axios.get(`${APIprefix}/trending`, config)
}

export { postPosts, getPosts, postLike, getPostsByHashtag, getHashtags, deletePost };

