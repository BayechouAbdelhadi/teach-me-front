import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet"
import {makeStyles} from "@material-ui/core"

const useStyles=makeStyles((theme) => ({
  carte:{
    height:'86vh'
  }
}))

export default function Carte() {
    const position = [51.505, -0.09]
    const classes = useStyles()
    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={classes.carte}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}