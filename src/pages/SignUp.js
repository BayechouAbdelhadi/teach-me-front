import React,{useState} from 'react'
import axios from 'axios';
import  { URL } from '../middelwares';
import {useHistory} from 'react-router'
import './SignUp.css'


const registerUser =async(user,history)=>{
    await axios.post(`${URL}users/register`,user)
        .then(res=>{
            history.push('/signin');
        })
        .catch(error=>console.error(error))
}

export default function SignUp() {

    const [user,setUser]=useState({});
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        registerUser(user,history);
    }

    const HnadleInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div className="root_container">
            <div className="sign_up_container">
                <h2 className="sign_up_header">Sign Up</h2>
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
                            Sign Up
                        </button>
                </form>
            </div>
        </div>
    )
}
