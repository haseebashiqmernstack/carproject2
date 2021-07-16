import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './views/user/login';
import Signup from './views/user/singup';
import ViewVehicle from './views/viewvehicle';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/viewvehicle' component={ViewVehicle} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
