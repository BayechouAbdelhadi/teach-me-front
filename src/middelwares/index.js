const URL="http://localhost:8080/api/";


const headers ={
    headers:{
        Authorization: 'Bearer '+localStorage.getItem("access_token")
    }
}
export {
    URL,
    headers
};