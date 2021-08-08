import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core';
import { Typography ,Slider} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {setMaxPrice}from "../../redux/redux-slices/filterSlice";

const useStyles = makeStyles({
  dialog: {
    padding:"20px",
  },
 
});

function FilterItems(props) {
  const classes=useStyles();
  const { onClose, open,filters } = props;
  const [price,setPrice]=React.useState(0);

  const handleClose = () => {
    onClose(price);
  };

  
  return (
    <Dialog onClose={handleClose} aria-labelledby="filter" open={open} >
      <DialogTitle id="filter">Choisissez vos critères</DialogTitle>
        <div className={classes.dialog}>
            <Typography id="price-filter" gutterBottom>
            Prix
            </Typography>
            <Slider
                defaultValue={0}
                aria-labelledby="Prix"
                step={1}
                onChange={(e,value)=>setPrice(value)}
                min={0}
                max={150}
                valueLabelDisplay="auto"
            />
        </div>
    </Dialog>
  );
}


export default function Filter() {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    dispatch(setMaxPrice(value))
  };
  return (
    <div >
      <IconButton onClick={handleClickOpen}><span style={{color:"white"}}><i class="fa fa-filter"></i></span></IconButton>
      <FilterItems  open={open} onClose={handleClose}  />
    </div>
  );
}
