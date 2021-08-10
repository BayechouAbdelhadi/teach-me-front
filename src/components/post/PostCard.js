import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import {URL,headers} from '../../middelwares';
import MailIcon from '@material-ui/icons/Mail';
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width:"30vw",
    margin:"0 auto",
    backgroundColor:"#242526",
    color:"white",
    marginBottom:"10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minWidth:"20vw",
    border:"1px solid #898c8e",
    backgroundColor:"#3a3b3c",
    color:"white"
  },
  whiteTypo:{
      color:"white"
  },
  subHeader:{
      color:"gray"
  },
  favorite:{
    color:"red",
  },
  share:{
    color:"blue",
  },
  mail:{
    color:"yellow",
  }
}));

export default function RecipeReviewCard({post}) {
  const classes = useStyles();
  const history=useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [poster,setPoster]=useState(null);
  const user =useSelector(state=>state.user.user)


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  const sendMessage=async()=>{
    console.log('postcarde headers',headers)
    await axios.get(`${URL}conversations/${post.userId}/${user.id}`,headers)
    .then(async (response)=>{
        var convId=null;
       if(response.data)
         convId=response.data._id;
       else {
          await axios.post(`${URL}conversations/`,{senderId:user.id,receiverId:post.userId},headers)
            .then(response=>convId=response.data._id)
            .catch(error=>console.error(error))
       }
      history.push({
        pathname:'/messenger',
        state:{
          conersationId:convId
        }
      })
    })
    .catch(error=>{console.error(error)})
  }
  const fetchUserById=async ()=>{
      await axios.get(`${URL}users/${post.userId}`,headers)
        .then((response)=>{
            setPoster(response.data);
        })
        .catch(error=>console.error(error))
  }
  useEffect(()=>{
      fetchUserById();
  },[])
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar  src="https://bit.ly/3j0IUk8" className={classes.avatar}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {poster?poster.prenom+" "+poster.nom:""}
        subheader={
            <Typography variant="body2" color="textSecondary" component="p" className={classes.subHeader}>
                        {post.start_date}
            </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image="https://bit.ly/3yjAISp"
        title="Paella dish"
      />
      <CardContent>
      <Grid container spacing={3}>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.whiteTypo}>
                        {post.subject}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper}>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.whiteTypo}>
                        {post.price}€/h
                    </Typography>
                </Paper>
            </Grid>
       </Grid>
       <Grid container spacing={3}>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.whiteTypo}>
                        {post.duration}h
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.whiteTypo}>
                            Le {post.start_date}
                    </Typography>
                </Paper>
            </Grid>
       </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  className={classes.favorite}/>
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={sendMessage}>
          <MailIcon  className={classes.mail}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className={classes.share}/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {
                post.description
            }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}