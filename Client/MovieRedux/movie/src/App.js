import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import Middle from './components/middle';
import MainMovieBox from './components/mainmoviebox';
import axios from 'axios';



class App extends Component {

  constructor(props) {
      super(props);
    
      this.state = {
        data:[],
        show:false
      }
      this.passingFunction=this.passingFunction.bind(this);
   }

  componentDidMount() {

      axios.get('http://localhost:8081/getAllMovies')
     .then(response =>{
     
      this.setState({
        data: response.data,
        show:true
      });
      console.log(response.data);
     })
     .catch(error =>{
     console.log(error);
     })
  }

  passingFunction(newdata)
  {
    console.log("sdnms");
    console.log(newdata);

     this.setState({
          data:newdata
        })
  }

  render() {
    return (
      <div>
      <Middle pass={this.passingFunction}/>

      <MainMovieBox data={this.state.data}/>
      </div>
    );
  }
}

export default App;
