import React from 'react'
import {useLocation} from "react-router-dom"
import PostCard from "../../components/post/PostCard"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minHeight:"86%",
      margin:"20px auto",
    },
  }));
  
export default function PostDetails() {
    const classes = useStyles()
    const location=useLocation();
    const post=location.state?.post;
    return (
        <div className={classes.root} >
            {post && <PostCard post={post}></PostCard>}
            <div>

            </div>
        </div>
    )
}
