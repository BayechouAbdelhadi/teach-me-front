import React ,{useState,useEffect} from 'react';
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import  { URL } from '../../middelwares';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'white',
      padding:10,
      borderRadius:'3%',
      boxShadow:' 0px 0px 5px 1px',
      //opacity:'80%',
      border :'solid #04295D',
      backgroundColor:"light gray"
    },
    avatar: {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
      boxShadow:"inset 0 -3em 3em Tomato, 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em Tomato"
    },
    form: {
      width:'100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
     
  
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'tomato' ,
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
    },
    inputFocused: {
        width: '40%',
        borderColor: 'black',
        boxShadow: '0 0 0 0.2rem tomato',
        backgroundColor: "#00FF00",
      },
    main:{
      height : 800 ,
    },

  }));



export default function SignUp() {

    const [user,setUser]=useState({username:"",password:"",role:"student"});
    const [errors,setErrors]=useState(null)
    const history = useHistory()
    const classes=useStyles()
    const [shoudDisableSignIn,setShoudDisableSignIn]=useState(false);

    const registerUser =async()=>{
        setShoudDisableSignIn(true);
        console.log(`user`, user)
        await axios.post(`${URL}users/register`,user)
            .then(res=>{
                history.push('/signin');
                setShoudDisableSignIn(false);
            })
            .catch(error=>{
                setErrors("veuillez choisir un autre email ");
                setShoudDisableSignIn(false);
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        registerUser();
    }

    const HnadleInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        
    },[errors])

    return (
        <div className={classes.main}>
        <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <div className={classes.paper}  >
            <Avatar className={classes.avatar} src=""/>
            <Typography component="h1" variant="h5">
            Connection
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
         <TextField
            variant="outlined"
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
          {errors && <div> {errors}</div>}
          <TextField
            variant="outlined"
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
           <FormControl 
                fullwidth
            >
                <InputLabel id="role-select-label">Age</InputLabel>
                <Select
                labelId="role-select-label"
                id="role-select"
                value={user.role}
                name="role"
                onChange={HnadleInputChange}
                // input={<BootstrapInput />}
                >
                <MenuItem value="" disabled>
                    <em>Role</em>
                </MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="teacher">Teacher</MenuItem>
                </Select>
            </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={!shoudDisableSignIn?classes.submit:classes.disable}
            disabled={shoudDisableSignIn}
          >
             {shoudDisableSignIn?<div style={{color:"brown"}}>Connection au serveur ..... </div>:"S'enregistrer "}
          </Button>
        </form>
      </div>
    </Container>
    </div>
    )
}
