import React,{useState} from 'react'
import StudentProfile from './student-profile';
import TeacherProfile from './teacher-profile';
import jwt_decode from "jwt-decode";
import {useSelector} from 'react-redux';
import "./Profile.css"
export default function Profile() {
    const role=useSelector(state=>state.user.user).role;
    return(
        <div className="profile_container">
            {
                role==="teacher" ?<TeacherProfile/>:<StudentProfile/>
            }
        </div>
    )
}
