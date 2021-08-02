import React from 'react'
import {useSelector} from "react-redux"
import "./Teacher.css";
import ProfileCard from '../../../components/profile/ProfileCard';
import Information from '../../../components/profile/Information'
import ProfileNavbar from '../../../components/profile/ProfileNavbar';
export default function TeacherProfile() {
    const profileactivePage=useSelector(state=>state.profile.teacherProfile.activePage);
    console.log(`profileactivePage`, profileactivePage)
    return (
        <div className="teacher-profile_container">
            <ProfileCard/>
             {renderComponent(profileactivePage)}
        </div>
    )
}

const renderComponent=(seletor)=>{
    switch (seletor) {
        case "informations":return <Information/>
        case "contact":return <div>contact</div>
        case "makeOffer":return <div>make offer</div>
        case "history":return <div>history</div>
        default:return "";
    }
}