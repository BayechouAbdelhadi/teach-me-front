import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import {URL,headers} from  "../../middelwares"
import Avatar from "@material-ui/core/Avatar"
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme) => ({
  avatar:{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "20px",
  }
})
);

export default function Conversation({ conversation, currentUser }) {
  const classes=useStyles();
  const [friend, setFriend] = useState(null);
  useEffect(() => {
    console.log(`currentUser.id`, currentUser.id)
    const friendId = conversation.members.find((m) => m !== currentUser.id);

    const getFiend = async () => {
      console.log(`friendId`, friendId)
      try {
        const res = await axios.get(URL+"users/" + friendId,headers);
        setFriend(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFiend();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <Avatar src={"https://bit.ly/3ihXEvW"} className={classes.avatar}/>
      <span className="conversationName">{friend?.username}</span>
    </div>
  );
}
