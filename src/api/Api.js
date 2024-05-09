import axios from "axios";

const url="https://jsonplaceholder.typicode.com";
export const axiosInstance = axios.create({
baseURL: url,
});


export const endPoints = {

  users:"/users",
  postUser:"/posts?userId=",
  albumUser:"/albums?userId=",
  todosUser:"/todos?userId=",
  
};