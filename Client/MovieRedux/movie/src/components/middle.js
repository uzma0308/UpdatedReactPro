import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Middle extends Component {

  constructor(props) {
      super(props);
    
      this.state = {
        dataList:[{
          name:"Avatar",
          id:1
        },
        {
            name:"3 idiot",
            id:2
        }],
        dataListShow:[{
          name:"Avatar",
          id:1
        },
        {
            name:"3 idiot",
            id:2
        }],
        showList:false,
        value:'',
        data:[],
        searchedData:[],
        show:false
      }
      
   }

   onFocus() {
  this.setState({
       showList:true
     })
  }

  onBlur() {

     this.setState({
       showList:this.state.show
     })
  }

   check()
  {
    this.setState({
       show:true
     })
  }
  uncheck()
  {
    this.setState({
       show:false
     })
  }


 handleChange(event) {

  this.setState({
      value:event.target.value
     })
     if(event.target.value!="" && event.target.value!=undefined)
          {
              axios.post('http://localhost:8081/search',{data:event.target.value})
              .then(response =>{

              if(response.data.length>0)
                    {
                
                      this.setState({
                        dataListShow:response.data
                    })
                  }
                })
              .catch(error =>{
              console.log(error);
              })
          }
    else{
      this.setState({
          dataListShow:this.state.dataList
        })
    }
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();

    if(this.state.value!="" && this.state.value!=undefined)
          {
              axios.post('http://localhost:8081/searchAll',{data:this.state.value})
              .then(response =>{
                console.log(response.data);
                this.props.pass(response.data);
                })
              .catch(error =>{
              console.log(error);
              })
          }
            else{
               axios.get('http://localhost:8081/getAllMovies')
                      .then(response =>{

                        console.log(response.data);
                        this.props.pass(response.data);
                      })
                      .catch(error =>{
                      console.log(error);
                      })
            }
            

  }

 
  render() {
    return (
      <div className="container-fluid padding" onClick>
        <div className="main">
        <div className="jumbotron">
          <h1 className="main_h1">WE PRESENT YOU MOVIE</h1>
          <p className="main_p">a better way to search movie!!!</p>
          <br/>
          <div className="form-group row"> 

           <div className="col-xs-2">
          </div> 

             <div className="col-xs-8">
           <form onSubmit={this.handleSubmit.bind(this)}>                                                                                                              
                <div className="input-group search_mid">
                  <input type="text" autoComplete="off" className="form-control input-lg" placeholder="Search"  value={this.state.value} onChange={this.handleChange.bind(this)} onFocus={ this.onFocus.bind(this) }  onBlur ={ this.onBlur.bind(this)} name="search"/>
                  <div className="input-group-btn">
                    <button className="btn btn-default search_btn" type="submit">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              {this.state.showList && <div className="showList" onMouseOver={this.check.bind(this)} onMouseOut={this.uncheck.bind(this)}>
              <ul>
              {this.state.dataListShow.map((data,id) =>
								{
									return(
									<Link to={'/moviedetails?'+data.id}><li key={id}>	{data.name}</li></Link>
									)})}
              </ul>
              </div> 
              }
              </div>  
              </div>
          
        </div>   
      </div>
      </div>
    );
  }
}

export default Middle;