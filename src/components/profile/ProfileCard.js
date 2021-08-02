import React from 'react';
import {CgProfile} from "react-icons/cg";
import {AiOutlineMessage} from 'react-icons/ai';
import {MdSchool} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';
import "./ProfileCard.css"

const style={
    width:"12vw",
    height:"50px",
    marginLeft:"4vw",
    marginTop:'10px',
    borderRadius:'10px',
    border:"none",
    background:"black",
    color:"white",
}
const iconsStyle={
    size:"50",color:" #f29263"
}
export default function ProfileCard() {
    return (
    <div style={{display:"flex",flexDirection:"column",width:"20vw",height:"86vh",border:"5px solid #f29263"}}>
        <div className="card-block text-center text-white  " style={{borderBottomLeftRadius:"20px",backgroundColor:"black",padding:"5px",borderBottomRightRadius:"20px",height:"23vh"}}>
            <div className="m-b-10" > <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" style={{width:"5vw"}}/> </div>
            <h6 className="f-w-600">Hembo Tingor</h6>
            <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
         </div>
  
         <button style={style}><CgProfile size={30 } style={iconsStyle}/></button>
         <button style={style}><MdSchool  size={30 }style={iconsStyle}/></button>
         <button style={style}><FaHistory  size={30 }style={iconsStyle}/></button>
         <button style={style}><AiOutlineMessage  size={30 } style={iconsStyle}/></button>
  
        
    </div> 
)
}
 
{/* <div className="card-block">
            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
            <div className="row">
                <div className="row-sm-6">
                    <p className="m-b-10 f-w-600">Email</p>
                    <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                </div>
                <div className="row-sm-6">
                    <p className="m-b-10 f-w-600">Phone</p>
                    <h6 className="text-muted f-w-400">98979989898</h6>
                </div>
            </div>
            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
            <div className="row">
                <div className="row-sm-6">
                    <p className="m-b-10 f-w-600">Recent</p>
                    <h6 className="text-muted f-w-400">Sam Disuja</h6>
                </div>
                <div className="row-sm-6">
                    <p className="m-b-10 f-w-600">Most Viewed</p>
                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                </div>
            </div>
</div>   */}