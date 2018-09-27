import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'
import Result from './Components/Result/Result'

class App extends Component {

  constructor(){
  	super();
  	this.state={
  		input: '',
  		result_status: true,
  		result: '',
  	}
  }

  onInput = (event) => {
    this.setState({input: event.target.value})
    console.log(this.state.input);
  }

  onKey = (event) => {
    if(event.key==='Enter')
      this.onClick();
  }

  onClick = () =>{
    console.log('Check');
    // fetch('localhost:3001/register', {
    //       method: 'post',
    //       headers: {'Content-type': 'application/json'},
    //       body: JSON.stringify({
    //         input: this.state.input,
    //       })
    //     })
    // .then(response => response.json())
    // .then(response => {
    //   if(response.result_status){
    //   	this.setState({result_status: true,
    //   					result: response.result})
    //   }
    // })
    // .catch(err => console.log("There seems an error", err));
  }

  render() {
    return (
      <div className="App vh-100 w-100  bg-dark-gray">
        <Header className= " " />
        <Form className=""
	        onClick={this.onClick} 
	        onKey ={this.onKey} 
	        onInput = {this.onInput} />
	    
	   	{(this.state.result_status)?
	    	<Result className="" result={this.state.result} /> : <div />
	 	}
        <Footer />
      </div>
    );
  }
}

export default App;
