import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer:{
        width:"100%",
        minHeight:"8vh",
        backgroundColor:"black",
        padding:"20px"
    },
    footerH3:{
        width:"100%",
        textAlign:"center",
        color:"#d3d1cf"
    }

}))
export default function Footer() {
    const classes=useStyles()
    return (
        <div className={classes.footerContainer}>
            <h3 className={classes.footerH3}> Credit to Bayechou Abdelhadi</h3>
        </div>
    )
}
