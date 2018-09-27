import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'
import Result from './Components/Result/Result'
import isUrl from 'is-url'

class App extends Component {

  constructor(){
  	super();
  	this.state={
  		input: '',
  		result_status: false,
  		result: '',
  	}
  }

  checkURL = () => {
  	return isUrl(this.state.input)
  }

  checkIntegrity = () => {
  	const error = document.getElementById('error');

  	if(!this.checkURL()){
  		error.classList.remove('hidden');
  		return false;
  	}
  	else {
  		error.classList.add('hidden');
  		return true;
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
     console.log('isURL', isUrl(this.state.input));
    if(this.checkIntegrity()){
    	    console.log('CheckInteg', this.checkIntegrity());

	    fetch('http://localhost:3002/register', {
	          method: 'post',
	          headers: {'Content-type': 'application/json'},
	          body: JSON.stringify({
	            input: this.state.input,
	          })
	        })
	    .then(response => response.json())
	    .then(response => {
	      if(response.result_status){
	      	this.setState({result_status: true,
	      					result: response.result})
	      }
	    })
	    .catch(err => console.log("There seems an error", err));
	}
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
