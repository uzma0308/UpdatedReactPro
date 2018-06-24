import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar';
import Middle from './components/middle';
import MainMovieDetail from './components/mainmoviedetail';
class Routes extends Component {
   render() {
      return (
         <Router>
         	<div>
         	<Navbar/>

            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/moviedetails' component={MainMovieDetail} />
           </Switch>
           </div>
         </Router>
      );
   }
}
export default Routes;
