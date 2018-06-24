import React, { Component } from 'react';
import load from '../images/load.gif';
import axios from 'axios';

class MovieDetail extends Component {

	 constructor(props) {
      super(props);
    		this.state = {
				url:window.location.search.substring(1),
				name:'',
				date:'',
				directedBy:'',
				genres:[],
				description:'',
				actor:[],
				actress:[],
				img_url:'',
				show:false

	  }
		
   }
		

	 componentDidMount() {

      axios.post('http://localhost:8081/viewMore',{data:this.state.url})
     .then(response =>{
     
	 var res=response.data[0];
	 this.setState({
		 name: res.name,
		 description:res.description,
		 actor:res.actor,
		 actress:res.actress,
		 img_url:res.url,
		 directedBy:res.director,
		 genres:res.genres,
		  show:true
		});
     })
     .catch(error =>{
     console.log(error);
     })
  }




  render() {
    return (
    <div>
	{
		(this.state.show==true)?
		<div className="container-fuild main">

      	<div className="half_box">
	      	<div className="container">
	      		<div className="row">
			      		<div className="col-sm-5">
			      		 <img src={this.state.img_url} alt="Fjords" className="img-responsive img_full"/>
			      		 </div>
	      		
			      		  <div className="col-sm-6 margin_movieDetails">

			      		  	<div className="row ">

					      	<h2>{this.state.name}(2018)</h2>
							<h3>Directed by {this.state.directedBy}</h3>
							<h5>Genres : 
							{this.state.genres.map((gener,id) =>
								{
									return(
									<span key={id}>	{gener}</span>
									)})}
							</h5>

							</div>
							<div className="row movie_desc">
							<h3>Description</h3>
					      	<h5>{this.state.description}</h5>
							<h4>Actors</h4>
							<h5>{this.state.actor.map((actor,id) =>
								{
									return(
									<span key={id}>	{actor}</span>
									)})}
							</h5>
							<h4>Actress</h4>
							<h5>{this.state.actress.map((actress,id) =>
								{
									return(
									<span key={id}>	{actress}</span>
									)})}</h5>
							</div>
			    		  </div>
	    		  </div>
	      	</div>
	       

 		</div>
      </div>:
	   <div className="loader"><img src={load}></img></div>
	}	
      
	</div>
    );
  }
}

export default MovieDetail;