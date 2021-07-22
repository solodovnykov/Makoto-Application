import axios from "axios";

const API = axios.create({
  baseURL: "https://makoto-app-backend.herokuapp.com",
});

//http://localhost:5000/
//https://makoto-app-backend.herokuapp.com

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const deletePost = (id) => API.delete(`/posts/${id}`, deletePost);
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
