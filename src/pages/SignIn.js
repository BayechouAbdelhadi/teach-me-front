import React,{useState} from 'react'
import axios from 'axios';
import  { URL } from '../middelwares';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

const authenticateUser =async(user,history)=>{
    await axios.post(`${URL}users/login`,user)
        .then(res=>{
            localStorage.setItem("access_token",res.data.token)
            history.push('/')
        })
        .catch(error=>console.error(error))
}

export default function SignIn() {
    const history=useHistory();
    const [user,setUser]=useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser(user,history);
    }

    const HnadleInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div className="root_container">
            <div className="sign_in_container">
                <h2 className="sign_in_header">Sign In</h2>
                <form  
                    onSubmit={handleSubmit}
                    className="form_container"
                >
                    <input 
                        type="email"
                        name="username" 
                        onChange={HnadleInputChange}
                        className="form_input_element"
                        placeholder={"uername"}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        onChange={HnadleInputChange}
                        className="form_input_element"
                        placeholder={"password"}
                    />
                    <button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        className="form_button_element"
                        >
                            Sign In
                        </button>
                </form>
            </div>
        </div>
    )
}
