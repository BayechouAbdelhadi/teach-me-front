//const URL="http://localhost:8080/api/";
const URL="https://teahme-t.herokuapp.com/api/";


const getToken=()=>{
    return 'Bearer '+ localStorage.getItem("access_token");
}
const headers ={
    headers:{
        Authorization: getToken()
    }
}
export {
    URL,
    headers
};