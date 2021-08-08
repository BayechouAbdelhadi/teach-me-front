import React,{useState,useEffect}from 'react'
import {useSelector} from "react-redux";
import PostForm from "../../components/home/teacher/PostForm";
import MakePost from "../../components/home/teacher/MakePost";
import PostCard from "../../components/home/PostCard";
import axios from "axios"
import {URL,headers} from "../../middelwares";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postsContainer:{
        width:"50vw",
        margin:"0 auto",
        textAligne:"center",

    },
    main:{
        backgroundColor:"#18191a",
        // width:'50vw',
        // margin:"0 auto",
        minHeight:"86vh",
        padding:'20px',
    }
}))
export default function AuthenticatedUserHome() {
    const classes=useStyles();
    const user=useSelector(state=>state.user.user);
    const filters=useSelector(state=>state.filters);
    const [posts, setPosts] = useState([]);
    
    const fetchPosts =async()=>{
        await axios.get(`${URL}posts`,{params:{filters:filters}})
            .then(res=>{
                setPosts(res.data);
            })
            .catch(error=>console.error(error));
    }
    useEffect(()=>{
        fetchPosts();
    },[filters])


    return (
        <div className={classes.main}>
           {
               user.role ==="teacher" && <MakePost/>
           }

           <div className={classes.postsContainer}>
            {posts.map(post=>{
                return <PostCard key={post._id} post={post}/>
            })}
            </div>
        </div>
    )
}
