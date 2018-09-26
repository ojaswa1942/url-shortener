import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
