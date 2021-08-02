import React ,{useState,useEffect} from 'react';
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import  { URL } from '../../middelwares';
import {useDispatch} from 'react-redux';
import jwt_decode from "jwt-decode";
import  {setUser,setValidToken} from "../../redux/redux-slices/userSlice";

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
    </div>
  );
 }

// import React ,{useState,useEffect} from 'react';
// import axios from "axios"
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import {useSelector} from 'react-redux';
// import { useHistory } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import { URL } from "../../../middlewares/request";

// // import jwt_decode from "jwt-decode";


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(5),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor:'white',
//     padding:10,
//     borderRadius:'3%',
//     boxShadow:' 0px 0px 5px 1px',
//     //opacity:'80%',
//     border :'solid #04295D'
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: "#04295D",
//   },
//   form: {
//     width:'100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),

//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     //backgroundColor:theme.palette.secondary,
//   },
//   disable: {
//     backgroundColor:"#04295D",

//   },
//   error:{
//     color:'red',
//     fontWeight:'bold',
//     fontSize:13,
//     textAlign:'center'
//   }
//   ,
//   Container:{
//     marginTop:100,
//   },
//   input:{
//      fontWeight:'bold'
//   },
//   main:{
//     height : 800 ,   
//   },
//   logo:{
//     width:150,
//     height:150,
//     marginTop:"10px",
//     marginBottom:"10px"
//   },
//   logoContainer:{
//     width:"100%",
//     backgroundColor:"#04295D",
//     textAlign: "center"

//   }
// }));
// const  Login =() =>{
//     const classes = useStyles();
//     const [loginState,setloginState]=useState({username: "",password: "",errors: " "});
//     const security=useSelector(state=>state.security);
//     const errors=useSelector(state=>state.errors);
//     const [shoudDisableSignIn,setShoudDisableSignIn]=useState(false);
//     const history =useHistory();

//     const updateDisponibiliteRestaurant = async (disponibilite) => {
//         await axios.put(URL + "restaurant/info_restaurant/1/", {
//           disponibilite_restaurant: disponibilite,
//         }).then(res=>history.push("/admin")
//         );
//       };
//     const authenticate = async(loginRequest)=>{
//         await axios({
//             url:`${URL}accounts/token/`,
//             method:'post',
//             //headers: {'Access-Control-Allow-Origin': '*'},
//             data: loginRequest
//             }).
//             then(res=>{
//                 // extract token from res.data
//                 const { access } = res.data;
//                 // store the token in the localStorage
//                 localStorage.setItem("jwtToken", access);
//                 // set our token in header ***
//                 // decode token on React
//                 // // const decoded = jwt_decode(token);
//                 // dispatch to our securityReducer
//                 setShoudDisableSignIn(false);
//                 updateDisponibiliteRestaurant(true);
//             }).catch(err=>{
//                 setloginState({...loginState,errors:"Email ou mot de passe incorrecte"})
//                 setShoudDisableSignIn(false);
//             })
//     }

//     const onChange =(e)=>{
//       setloginState({ ...loginState,[e.target.name]: e.target.value });
//     }
//     const onSubmit =(e)=> {
//       setShoudDisableSignIn(true);
//       e.preventDefault();
//       const loginRequest = {
//         username: loginState.username,
//         password: loginState.password
//       };
//       authenticate(loginRequest);
//     }
//   return (
    // <div className={classes.main}>
    // <div className={classes.logoContainer}><img src ="logo_petit_m.png" className={classes.logo} /></div>
    // <Container component="main" maxWidth="xs"  >
    //   <CssBaseline />
    //   <div className={classes.paper}  >
    //     <Avatar className={classes.avatar}/>
    //     <Typography component="h1" variant="h5">
    //         Connection
    //     </Typography>
    //     <form className={classes.form} noValidate onSubmit={onSubmit}>
    //      <TextField
    //         variant="filled"
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         classname={classes.input}
    //         label="addresse mail"
    //         name="username"
    //         autoComplete="email"
    //         autoFocus
    //         onChange={onChange}
    //       />
    //       <TextField
    //         variant="filled"
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="mot de passe"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //         onChange={onChange}
    //       />
    //       {loginState.errors!=="" && <p className={classes.error}>{loginState.errors} </p>}
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         color="secondary"
    //         className={!shoudDisableSignIn?classes.submit:classes.disable}
    //         disabled={shoudDisableSignIn}
    //       >
    //          {shoudDisableSignIn?<div style={{color:"brown"}}>Connection au serveur ..... </div>:'Connection '}
    //       </Button>
    //     </form>
    //   </div>
    // </Container>
    // </div>
//   );
// }
// export default Login;