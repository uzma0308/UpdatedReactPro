import React, { Component } from 'react';
import MovieBox from './moviebox';

class MainMovieBox extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data:[]
      }
   }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data!==null)
      {
     this.setState({
       data:nextProps.data
     })
   }
  }
  render() {
    return (
     <div>
     <div className="container">
        {
            this.state.data.length>0 && this.state.data.map((data,id) =>
              { 
                return(
                  <div key={id} className="col-xs-3">
                  <MovieBox name={data.name} url={data.url} genres={data.genres} id={data.id}/>
                  </div>);
              })
         }
       </div>
	  </div>
    );
  }
}

export default MainMovieBox;