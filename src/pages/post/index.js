import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostForm from"../../components/post/PostForm";
import ChooseLocation from "../../components/post/ChooseLocation"
import  {useSelector} from "react-redux"
import axios from "axios";
import {URL,headers} from "../../middelwares";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    height:"86vh",
    margin:"0 auto"
  },
  button: {
    marginRight: theme.spacing(1),
    border:"1px solid #a4a9ad",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonContainer:{
    margin:"0 auto",
      width:'50%',
      display:"flex",
      justifyContent:"space-between",
      overflow: "wrap"
  },
  instructionsContainer:{
      margin:"0 auto",
      width:'50%',
      display:"flex",
      justifyContent:"space-between",
      overflow: "wrap"
  },
  disabledButton:{
    border:"1px solid #a4a9ad",
  }
}));

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

function getSteps() {
  return ['Fournir des informations', "choisir l'endroit "];
}



export default function MakePost() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const user = useSelector(state=>state.user.user);

  const initialPost={
        description:"",
        subject:"",
        duration:"",
        start_date: formatDate(Date.now()),
        price:"",
        userId:user.id,
        location:[user.location.lat,user.location.lng]
  }
  const [post,setPost]=useState(initialPost)
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PostForm post={post} setPost={setPost} />;
      case 1:
        return <ChooseLocation post={post} setPost={setPost} />;
      default:
        return 'Unknown step';
    }
  }
  

  const createPost=async()=>{
      const postData={...post,location:JSON.stringify(post.location)}
      console.log(`(object)`, (postData),'headeers',headers)
     await axios.post(`${URL}posts/create-post`,postData,headers)
      .then((res)=>{
        setPost(initialPost)
      })
      .catch((error)=>{console.error(error)})
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === steps.length - 1)
        createPost();
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label} >
              <StepLabel >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className={classes.instructionsContainer}>
            <Typography className={classes.instructions}>
               Votre poste a bien été soumis 
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reinitialiser
            </Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div  className={classes.buttonContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={activeStep === 0?classes.disabledButton:classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Publier' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}