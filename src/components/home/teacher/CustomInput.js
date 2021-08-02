import React from 'react';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
        backgroundColor:"#3a3b3c",
        color:"white",
        border:"1px solid #898c8e",

    },
    '& .MuiInput-underline:after': {
        backgroundColor:"#3a3b3c",
        color:"white",
        border:"1px solid #898c8e",

    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        backgroundColor:"#3a3b3c",
        color:"white",
        borderRadius:"20px",
        border:"1px solid #898c8e",

      },
      '&:hover fieldset': {
        backgroundColor:"#3a3b3c",
        color:"white",
        border:"1px solid #898c8e",

      },
      '&.Mui-focused fieldset': {
        backgroundColor:"#3a3b3c",
        color:"white",
        border:"1px solid #898c8e",

      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomInput(props) {
  const classes = useStyles();
  return (
      <CssTextField
        className={classes.margin}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
        {...props}
      />
  );
}
