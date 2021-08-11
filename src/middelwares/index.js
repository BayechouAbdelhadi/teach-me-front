//const URL="http://localhost:8080/api/";
const URL="https://teahme-t.herokuapp.com/api/";
// const WS_URL="ws://localhost:8080"
const WS_URL="ws://teahme-t.herokuapp.com"

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
    WS_URL,
    headers
};