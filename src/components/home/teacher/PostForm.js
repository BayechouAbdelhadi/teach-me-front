import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
// import TextField from './CustomInput'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Icon from "@material-ui/core/Icon";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"50%",
    margin:"0 auto",
    marginBottom:'10px',
    backgroundColor:"#242526",
    padding:"10px",
    borderRadius:"10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:"1px solid #898c8e",
    backgroundColor:"#3a3b3c",
    color:"white"
  },
  textAria:{
      width:'100%',
      margin:"0 auto",
      padding:"10px",
      paddingLeft:40,
      border:"1px solid #898c8e",
      backgroundColor:"#3a3b3c",
      border:"none",
      color:"white",
      borderRadius:"60px"
  },
  publishButton:{
      margin:"0 auto",
      border:"1px solid #898c8e",
      backgroundColor:"#3a3b3c",
      color:"white",
  },
  postHeader:{
      widht:"100%",
      textAlign:"center",
      color:"#9EC1CB"
  },
  customLabel:{
    color:"gray"
  }
}));
 
export default function AutoGrid({post,setPost}) {
  const classes = useStyles();
  
  const onInputChange=(e)=>{
      setPost({...post,[e.target.name]:e.target.value});
  }
  
  return (
    <div className={classes.root}>
        <div className={classes.postHeader}><h3>Publier un offre</h3></div>
      <form >
        <Grid container spacing={3}>
            <Grid item xs>
                <TextField
                id="subject-input"
                label={<div className={classes.customLabel}>Sujet</div>}
                type="text"
                name="subject"
                value={post.subject}
                onChange={onInputChange}
                />
            </Grid>
            <Grid item xs>
                <TextField
                id="price-input"
                label={<div className={classes.customLabel}>Prix</div>}
                type="number"
                name="price"
                value={post.price}
                onChange={onInputChange}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                <TextField
                id="duration-input"
                label={<div className={classes.customLabel}>Durée</div>}
                type="number"
                name="duration"
                value={post.duration}
                onChange={onInputChange}
                />
            </Grid>
            <Grid item xs>
                <TextField
                id="date"
                label={<div className={classes.customLabel}>Date Début</div>}
                type="date"
                name="start_date"
                keyboardIcon={<Icon className="fa fa-plus" />}
                value={post.start_date}
                onChange={onInputChange}
                />
            </Grid>
        </Grid>
        <Grid container  spacing={3}>
            <Grid item  xs >
                    <TextareaAutosize  
                        aria-label="empty textarea" 
                        placeholder="Description"
                        name="description"
                        onChange={onInputChange}
                        value={post.description}
                        className={classes.textAria}
                    />
            </Grid>
        </Grid>
      </form>

    </div>
  );
}
