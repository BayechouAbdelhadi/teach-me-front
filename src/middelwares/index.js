const URL="http://localhost:8080/api/";


const token= 'Bearer '+localStorage.getItem("access_token")
console.log(`token from headers`, token)
const headers ={
    headers:{
        Authorization: token
    }
}
export {
    URL,
    headers
};