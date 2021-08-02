import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Profile from './pages/profile';
import Messenger from './pages/messenger';
import Contact from "./pages/contact";
import SecuredRoute from "./middelwares/SecuredRoute";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route   exact path="/" component={Home}/>
          <SecuredRoute   exact path="/profile" component={Profile}/>
          <SecuredRoute   exact path="/messenger" component={Messenger}/>
          <Route  exact  path= "/contact" component={Contact }/>
          <Route  exact  path= "/signUp" component={SignUp }/>
          <Route  exact  path= "/signIn" component={SignIn }/>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
