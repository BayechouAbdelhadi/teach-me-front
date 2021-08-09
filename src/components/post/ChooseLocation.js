import React from 'react'
import {MapContainer,TileLayer,Marker,Popup,useMapEvents} from "react-leaflet"
import {makeStyles} from "@material-ui/core"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
const useStyles=makeStyles((theme) => ({
  carte:{
    height:'30vh',
    border:"1px solid black",
    width:"50%",
    margin:"0 auto",
    borderRadius:"20px",
    marginBottom:"20px"
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
      <MapContainer 
        center={post.location} 
        zoom={13} 
        scrollWheelZoom={false} 
        className={classes.carte}
        fullscreenControl={true}
        >
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
