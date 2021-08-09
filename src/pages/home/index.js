import React,{useState,useEffect} from 'react'
import {MapContainer,useMap,TileLayer,Marker,Popup,Circle } from "react-leaflet";
import {useSelector} from "react-redux"
import {makeStyles} from "@material-ui/core"
import axios from "axios"
import {haversineDistance} from "../../utils"
import {URL,headers} from "../../middelwares";
import {Icon} from 'leaflet';
import GeneralHome from "./GeneralHome"
import {useHistory} from "react-router-dom"
// import PostCard from "../../components/post/PostCard"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'


export const teacherIcon = new Icon({
    iconUrl:'/teacher.svg',
    iconSize:     [38, 50], // size of the icon
   // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] ,
}
)

const useStyles=makeStyles((theme) => ({
  carte:{
    height:'86vh'
  }
}))
const limeOptions = { color: '#f94343' }

export default function Home() {
    const classes = useStyles();
    const history=useHistory()
    const position = useSelector(state=>state.user.user.location)
    const filters=useSelector(state=>state.filters);
    const validToken = useSelector(state=>state.user.validToken);

    const [posts, setPosts] = useState([]);
    
    const fetchPosts =async()=>{
        await axios.get(`${URL}posts`,{params:{filters:filters}})
            .then(res=>{
              // console.log(`filters`, filters)
              // console.log(`res.data`, res.data)
              // const filteredPosts=[]
              // for(var post of res.data)
              //   {  console.log(`haversineDistance`,haversineDistance(JSON.parse(post.location),position))
              //     if(haversineDistance(JSON.parse(post.location),position)<=filters.radius)
              //       filteredPosts.push(post)
              //   }
                // const filteredPosts=res.data.filter(post=>haversineDistance(JSON.parse(post.location),position)<=radius);
              // console.log(`filteredPosts`, filteredPosts)

              setPosts(res.data.filter(post=>haversineDistance(JSON.parse(post.location),position)<=filters.radius));
            })
            .catch(error=>console.error(error));
    }

    useEffect(()=>{
        fetchPosts();
    },[filters.maxPrice,filters.radius,filters.subject])

    const SetView=()=>{
      const map=useMap()
      map.setView(position,zoomSwitchRadius(filters.radius*1000));
      return null;
    }

    if(!validToken) return <GeneralHome/>

    return(
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        className={classes.carte}
        fullscreenControl={true}
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          //url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'"
        />
        <SetView></SetView>
        <Marker position={position}>
          <Popup>
            Votre position
          </Popup>
        </Marker>
        {
          posts.map(post=>{
            return <Marker 
                      key={post._id} 
                      position={JSON.parse(post.location)} 
                      icon ={teacherIcon}
                    >
                      <Popup>
                        <button
                          onClick={()=>{history.push({pathname:"/post/postdetails",state:{post:post}})}}
                        >
                          Deatils
                        </button>
                      </Popup>
                    </Marker>
        })
        }
        <Circle center={position} pathOptions={limeOptions} radius={filters.radius*1000} />
      </MapContainer>
    )
}
const zoomSwitchRadius=(radius)=>{
    if(0<=radius && radius<=10000) 
      return 12;
    if(10000<radius && radius<=20000) 
      return 11;
    if(20000<radius && radius<=30000) 
      return 10;
    return 10;
}