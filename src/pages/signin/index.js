import React ,{useState,useEffect} from 'react';
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  { URL } from '../../middelwares';
import {useDispatch} from 'react-redux';
import jwt_decode from "jwt-decode";
import  {setUser,setValidToken} from "../../redux/redux-slices/userSlice";

const useStyles = makeStyles((theme) => ({
    paper: {
      paddingTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding:10,
      // borderRadius:'3%',
      // boxShadow:' 0px 0px 5px 1px',
      // //opacity:'80%',
      // border :'solid #04295D',
      backgroundColor:"light gray",
      marginTop:20
    },
    avatar: {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
      background: "linear-gradient(0.25turn,#6e4eba 20% , #1877f2 90%  )",
      //boxShadow:"inset 0 -3em 3em #1877f2, 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em #1877f2"
    },
    form: {
      width:'100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
     
  
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      // backgroundColor:'#1877f2' ,
      background: "linear-gradient(0.25turn,#6e4eba 20% , #1877f2 90%  )"
    },
    disable: {
      backgroundColor:"#04295D",
  
    },
    error:{
      color:'red',
      fontWeight:'bold',
      fontSize:13,
      textAlign:'center'
    }
    ,
    Container:{
      marginTop:100,
      
    },
    input:{
       fontWeight:'bold',
       borderColor:'linear-gradient(0.25turn,#6e4eba 20% , #1877f2 90%  )'
    },
    main:{
      height :"86vh" ,
    },
    signInDescription:{
      height :"100%",
    },
    signInImage:{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }

  }));


export default function SignIn() {

    const history=useHistory();
    const [userDto,setUserDto]=useState({});
    const dispatch =useDispatch();
    const classes=useStyles()
    const [shoudDisableSignIn,setShoudDisableSignIn]=useState(false);


    const authenticateUser =async()=>{
        setShoudDisableSignIn(true);
        await axios.post(`${URL}users/login`,userDto)
            .then(res=>{
                localStorage.setItem("access_token",res.data.token)
                const user=jwt_decode(res.data.token);
                dispatch(setValidToken(true));
                dispatch(setUser(user));
                history.push('/');
                setShoudDisableSignIn(false);
            })
            .catch(error=>{
                console.error(error);
                setShoudDisableSignIn(false);}
            )

    }

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    const HnadleInputChange=(e)=>{
        setUserDto({...userDto,[e.target.name]:e.target.value})
    }

    return (
      <Grid container className={classes.main}>
        <Grid item xs>
          <Container component="main" maxWidth="xs"  >
          <div className={classes.paper}  >
              <Avatar className={classes.avatar} src=""/>
              <Typography component="h1" variant="h5">
              Connection
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              className={classes.input}
              // classes={{focused:classes.inputFocused}}
              label="addresse mail"
              name="username"
              autoComplete="email"
              onChange={HnadleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={HnadleInputChange}
            />
            {/* {loginState.errors!=="" && <p className={classes.error}>{loginState.errors} </p>} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={!shoudDisableSignIn?classes.submit:classes.disable}
              disabled={shoudDisableSignIn}
            >
              {shoudDisableSignIn?<div style={{color:"brown"}}>Connection au serveur ..... </div>:'Connection '}
            </Button>
           </form>
          </div>
          </Container>
        </Grid>
        <Grid item xs className={classes.signInDescription}>
            <img src={'/sign-in-image.jpg'} className={classes.signInImage}></img>
        </Grid>
      </Grid>
  );
 }

