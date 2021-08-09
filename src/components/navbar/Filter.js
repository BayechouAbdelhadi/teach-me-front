import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core';
import { Typography ,Slider} from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";
import {setMaxPrice,setRadius}from "../../redux/redux-slices/filterSlice";

const useStyles = makeStyles({
  dialog: {
    padding:"20px",
  },
 
});

function FilterItems(props) {
  const classes=useStyles();
  const { onClose, open} = props;
  const filters=useSelector(state=>state.filters)
  const [price,setPrice]=React.useState(filters.maxPrice);
  const [radius,setRadius]=React.useState(filters.radius);


  const handleClose = () => {
    console.log(`price`, price,'radius',radius);
    onClose({
      price,
      radius
    });
  };

  
  return (
    <Dialog onClose={handleClose} aria-labelledby="filter" open={open} >
      <DialogTitle id="filter">Choisissez vos critères</DialogTitle>
        <div className={classes.dialog}>
            <Typography id="price-filter" gutterBottom>
            Prix en €
            </Typography>
            <Slider
                value={price}
                aria-labelledby="Prix"
                step={1}
                onChange={(e,value)=>setPrice(value)}
                min={0}
                max={150}
                valueLabelDisplay="auto"
            />
             <Typography id="radius-filter" gutterBottom>
            Rayon en Km
            </Typography>
            <Slider
                value={radius}
                aria-labelledby="Rayon en Km"
                step={1}
                onChange={(e,value)=>setRadius(value)}
                min={0}
                max={30}
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

  const handleClose = (filter) => {
    setOpen(false);
    dispatch(setMaxPrice(filter.price))
    dispatch(setRadius(filter.radius))
  };
  return (
    <div >
      <IconButton onClick={handleClickOpen}><span style={{color:"white"}}><i className="fa fa-filter"></i></span></IconButton>
      <FilterItems  open={open} onClose={handleClose}  />
    </div>
  );
}
