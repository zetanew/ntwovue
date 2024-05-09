import { axiosInstance, endPoints } from "./Api";
// TODO error handling

export const getAllUsers =async() => {

try {
    const reponse = await axiosInstance.get(endPoints.users);
    console.log(reponse);
    return reponse.data;
} catch (error) {
    console.log(error);
}}


export const getUserDetails =async(userId) => {

    try {
        const post = await axiosInstance.get(endPoints.postUser + `${userId}`);
        const albume = await axiosInstance.get(endPoints.albumUser + `${userId}`);
        const todos = await axiosInstance.get(endPoints.todosUser + `${userId}`);
        console.log(post);
        console.log(albume);
        console.log(todos);
       const reponse = {
            post: post.data,
            album: albume.data,
            todos: todos.data
        }
        return reponse;
    } catch (error) {
        console.log(error);
    }
}

