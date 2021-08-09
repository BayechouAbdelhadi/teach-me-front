import React ,{useState,useEffect} from 'react';
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import {useMap,MapContainer} from 'react-leaflet';
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
      margin: "15px auto",
      width: theme.spacing(7),
      height: theme.spacing(7),
      boxShadow:"inset 0 -3em 3em #ada6a6, 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em #ada6a6"
    },
    form: {
      
  
    },
    submit: {
      backgroundColor:'#4cdd2c' ,
      width:"50%"
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
       textAlign:'center'
    },
    inputFocused: {
       // width: '40%',
        borderColor: 'black',
        boxShadow: '0 0 0 0.2rem tomato',
        backgroundColor: "#00FF00",
      },
    main:{
      height :"84vh" ,
      flexGrow: 1,
      width:"50%",
      margin:"0 auto",
      marginBottom:'10px',
      padding:"10px",
      borderRadius:"10px"
     
    },
    roleSelect:{
      width:"100%",
      textAlign:"center"
    },
    heading:{
      width:200,
      textAlign:"center",
      margin:"0 auto"
    }
    ,
    locationChecked:{
      color:"green",
      width: 40,
      height: 40
    }
  }));



export default function SignUp() {
    const classes=useStyles()
    const [user,setUser]=useState({username:"",password:"",role:"student"});
    const [errors,setErrors]=useState(null)
    const history = useHistory()
    const [shoudDisableSignIn,setShoudDisableSignIn]=useState(false);
    const [userChoosedToLocate,setUserChoosedToLocate]=useState(false)

    const registerUser =async()=>{
        setShoudDisableSignIn(true);
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
    
    const Location=()=>{
      const map=useMap();
      map.locate().on("locationfound",
          (e)=>{setUser({...user,location:JSON.stringify(e.latlng)})}
      )
      return(
        <div></div>
      )
    }
    return (
        <div className={classes.main}>
        <div className={classes.heading}>
          <Avatar className={classes.avatar} src=""/>
          <Typography component="h1" variant="h5">
              Connection
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs>
              <TextField
              
              margin="normal"
              required
              fullWidth
              id="nom"
              // className={classes.input}
              // classes={{focused:classes.inputFocused}}
              label="Nom"
              name="nom"
              onChange={HnadleInputChange}
            />
            </Grid>
            <Grid item xs>
              <TextField
              
              margin="normal"
              required
              fullWidth
              id="prenom"
              // classes={{focused:classes.inputFocused}}
              label="Prenom"
              name="prenom"
              onChange={HnadleInputChange}
            />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
                <TextField
                
                margin="normal"
                required
                fullWidth
                id="email"
                // classes={{focused:classes.inputFocused}}
                label="addresse mail"
                name="username"
                autoComplete="email"
                onChange={HnadleInputChange}
              />
              {errors && <div> {errors}</div>}
            </Grid>
            <Grid item xs>
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
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <FormControlLabel
                  control={<Checkbox  
                              checkedIcon={
                                <LocationOnIcon 
                                    className={classes.locationChecked} 
                                />
                              }
                              value={ userChoosedToLocate}
                              onChange={(e)=>{setUserChoosedToLocate(e.target.value)}}
                            />
                 }
                  label="me localiser"
              />
              {
                userChoosedToLocate && <MapContainer ><Location/></MapContainer>
              }
            </Grid>
            <Grid item xs>
            <FormControl className={classes.roleSelect}>
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                fullWidth
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
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs style={{textAlign:"center"}}>
              <Button
              type="submit"
              variant="contained"
              color="primary"
              className={!shoudDisableSignIn?classes.submit:classes.disable}
              disabled={shoudDisableSignIn}
              >
              {shoudDisableSignIn?<div style={{color:"brown"}}>Connection au serveur ..... </div>:"S'enregistrer "}
            </Button>
            </Grid>
          </Grid>
        </form>
    </div>
    )
}
