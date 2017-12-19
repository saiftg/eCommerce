import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Custome components
import NavBar from './containers/NavBar';
import SlickSlider from './components/SlickSlider';
import Register from './containers/Register';
import Home from './components/Home';
import Login from './containers/Login';
import ProductLines from './containers/ProductLine';
import Logout from './containers/Logout';
import Cart from './containers/Cart';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <div className="app-body">
        <Route exact path="/" component={SlickSlider} />
        <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/cart' component={Cart} />
            <Route path='/shop/:productLine' component={ProductLines} />
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
