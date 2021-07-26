import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SecuredRoute from "./middelwares/SecuredRoute";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <SecuredRoute   exact path="/" component={Home}/>
          <Route  exact  path= "/signUp" component={SignUp }/>
          <Route  exact  path= "/signIn" component={SignIn }/>
      </Switch>
    </Router>
  );
}

export default App;
