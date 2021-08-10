import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import TeachingImageHome from "../../images/home-teaching-image.jpg"

const useStyles = makeStyles((theme) => ({
    homeContainer:{
        width:"100%",
        minHeight:"86vh",
        paddingTop:"50px"
    },
    homeDescription:{
        width:"100%",
        backgroundImage:`url(${TeachingImageHome})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
    },
    descriptionText:{
        minHeight:"80vh",
        width:"80%",
        margin:"0 auto",
        textAlign:"center",
        color:"#fa9745"
    },
    carousel:{
        width:"70%",
        margin:"0 auto",
        marginBottom:0,
        border:"1px solid",
        borderRadius:"10px"
    },
    carouselTitle:{
        width:"80%",
        margin:"0 auto",
        textAlign:"center",
        color:"white",
        marginBottom:"30px"
    }
}))
const images=[
    {   id:1,
        src:"/affichage-sur-carte.png",
        legend:"Affichage sur la carte"
    },
    {   id:2,
        src:"/filtrage.png",
        legend:"Choisissez les critéres qui correspondent à vos recherches"
    },
    {   id:3,
        src:"/publier-offre.png",
        legend:"Vous pouvez en tant que professeur publier un offre"
    },
]
export default function GeneralHome() {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <div className={classes.homeDescription}>
                <div className={classes.descriptionText}>
                    <h1 >
                        avec TeachMe la recherche de soutien n'est plus compliquée
                    </h1>
                </div>
                
            
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
            <   path fill="#fa9745" fill-opacity="1" d="M0,96L24,117.3C48,139,96,181,144,213.3C192,245,240,267,288,256C336,245,384,203,432,192C480,181,528,203,576,197.3C624,192,672,160,720,138.7C768,117,816,107,864,112C912,117,960,139,1008,128C1056,117,1104,75,1152,85.3C1200,96,1248,160,1296,165.3C1344,171,1392,117,1416,90.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
            </div>
            <div style={{width:"100%",minHeight:"500px",backgroundColor:"#fa9745"}}>

                <div className={classes.carouselTitle}>
                    <h1 >
                        En quoi le logiciel peut apporter de l'aide
                    </h1>
                </div>
               <Carousel  autoplay={true} infiniteLoop={true}
                                        interval={4000} className={classes.carousel}>
                   {
                       images.map((image)=><div key={image.id}>
                           <img src={image.src} style={{borderRadius:"10px"}}/>
                           <p className="legend">{image.legend}</p>
                       </div>)
                   }
               </Carousel>
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
                    <path  fill-opacity="1" d="M0,96L24,117.3C48,139,96,181,144,213.3C192,245,240,267,288,256C336,245,384,203,432,192C480,181,528,203,576,197.3C624,192,672,160,720,138.7C768,117,816,107,864,112C912,117,960,139,1008,128C1056,117,1104,75,1152,85.3C1200,96,1248,160,1296,165.3C1344,171,1392,117,1416,90.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </div>
        
        </div>
    )
}
