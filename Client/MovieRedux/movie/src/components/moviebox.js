import React, { Component } from 'react';
import demo from '../images/demo.jpg';
import {Link} from 'react-router-dom';


class MovieBox extends Component {


	constructor(props) {
			super(props);
			
   }
  render() {
    return (
      <div>
        <div className="thumbnail">
	      
	        <img src={this.props.url} alt="Fjords" className="img_movie"/>
	        <div className="caption">
	          <p className="text_size"> {this.props.name}</p>
					<p>
						{this.props.genres.map((gener,id) =>
							{
								return(
								<span key={id}>	{gener}</span>
								)})}
								</p>
						<Link to={'/moviedetails?'+this.props.id}>View More</Link>
	        </div>
	 
	    </div>
	    </div>
    );
  }
}

export default MovieBox;