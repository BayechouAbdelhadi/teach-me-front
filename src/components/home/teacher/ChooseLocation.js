import React,{useState} from 'react'
import {MapContainer,TileLayer,Marker,Popup,useMapEvents} from "react-leaflet"
import {useSelector} from "react-redux"
import {makeStyles} from "@material-ui/core"

const useStyles=makeStyles((theme) => ({
  carte:{
    height:'20vh'
  }
}))

export default function ChooseLocation({post,setPost}) {
    const classes = useStyles();

    const Locate=()=>{
        const map = useMapEvents({
            click: (e) => {
              map.flyTo(e.latlng);
              setPost({...post,location:e.latlng})
            }
          })
         return null
    }
    return(
      <MapContainer center={post.location} zoom={13} scrollWheelZoom={false} className={classes.carte}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={post.location}>
          <Popup>
            Votre position
          </Popup>
          <Locate/>
        </Marker>
      </MapContainer>
    )
}
