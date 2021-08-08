import React from 'react'
import {useSelector} from "react-redux"
import "./Teacher.css";
export default function TeacherProfile() {
    const profileactivePage=useSelector(state=>state.profile.teacherProfile.activePage);
    console.log(`profileactivePage`, profileactivePage)
    return (
        <div className="teacher-profile_container">
             {renderComponent(profileactivePage)}
        </div>
    )
}

const renderComponent=(seletor)=>{
    switch (seletor) {
        case "contact":return <div>contact</div>
        case "makeOffer":return <div>make offer</div>
        case "history":return <div>history</div>
        default:return "";
    }
}