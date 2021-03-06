import React,{useState} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {setValidToken} from "../../redux/redux-slices/userSlice";
import Filter from "./Filter"
import {setSubject} from "../../redux/redux-slices/filterSlice";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    paddingRight:theme.spacing( 2)
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar:{
    backgroundColor:"#242526"
  },
  links :{
    textDecoration:"none",
    color:"black"
  },
  iconLinks :{
    textDecoration:"none",
    color:"white"
  },
  avatar:{
    height:"50px",
    width:"50px"
  },
  navbarIcons:{
    width:35,
    height:35
  }
 
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch=useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isUserLoggedIn=useSelector(state=>state.user.validToken);
  const role=useSelector(state=>state.user.user.role);
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (route) => {
    if(route.name==='deconnexion')
      {
      console.log(`shoud disconnect`)
      localStorage.removeItem("access_token");
      dispatch(setValidToken(false));
    }
    setAnchorEl(null);
    handleMobileMenuClose();
    
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'menue-routes';
  const authenticatedUserRoutes =[
    {id:1, name: 'Profile', route:'/profile'},
    {id:2, name: 'My account',route:'/accounts'},
    {id:3,name:'deconnexion',route:'/'}
  ]
  const nonAuthenticatedUserRoutes =[
    {id:1, name: 'connexion', route:'/signin'},
    {id:2, name: "S'enregistrer",route:'/signup'}
  ]
  
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
      isUserLoggedIn?
          authenticatedUserRoutes.map(route=><MenuItem  key={route.id} >< Link to={route.route} onClick={()=>handleMenuClose(route)} className={classes.links}>{route.name}</Link></MenuItem>)
        :
        nonAuthenticatedUserRoutes.map(route=><MenuItem key={route.id} onClick={handleMenuClose}><Link to={route.route} className={classes.links}>{route.name}</Link></MenuItem>)
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     { isUserLoggedIn&&<MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Link to='/messenger' className={classes.links}>
            {/* <Badge badgeContent={4} color="secondary">
             
            </Badge> */}
             <MailIcon className={classes.navbarIcons}/>
          </Link>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
    }
    {isUserLoggedIn && role==="teacher" &&
          <>
            <IconButton aria-label="show 4 new mails" color="inherit">
            <Link to='/post' className={classes.iconLinks}>
              {/* <Badge badgeContent={4} color="secondary">
              </Badge> */}
              <LocalLibraryIcon  className={classes.navbarIcons} />
            </Link>
            </IconButton>       
        </>
        }
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {isUserLoggedIn?<Avatar src="https://bit.ly/3j0IUk8"  className={classes.avatar}/>:<AccountCircle />}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to ="/" className={classes.links} style={{color:"white"}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            {/* <MenuIcon /> */} 
          <Typography className={classes.title} variant="h6" noWrap>
            TeachMe
          </Typography>
          </IconButton>
          </Link>
          {isUserLoggedIn &&
            <>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon  />
                </div>
                <InputBase
                  onChange={(e)=>{dispatch(setSubject(e.target.value))}}
                  placeholder="Search???"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
                  
                
                {/* <i class="fa fa-filter"></i> */}
              </div>
              <Filter/>
           </>
          }
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isUserLoggedIn &&
              <>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Link to='/messenger' className={classes.iconLinks}>
                  {/* <Badge badgeContent={4} color="secondary">
                  </Badge> */}
                  <MailIcon  className={classes.navbarIcons} />
                </Link>
                </IconButton>       
            </>
            }
             {isUserLoggedIn && role==="teacher" &&
              <>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Link to='/post' className={classes.iconLinks}>
                  {/* <Badge badgeContent={4} color="secondary">
                  </Badge> */}
                  <LocalLibraryIcon  className={classes.navbarIcons} />
                </Link>
                </IconButton>       
            </>
            }
            <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
      
            {isUserLoggedIn?<Avatar className={classes.avatar} src="https://bit.ly/3j0IUk8" />:<AccountCircle />}
          </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
