import React, { Component } from 'react';
import './App.css';

import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">        
        <Navbar />  
        <Footer />            
      </div>
    );
  }
}

export default App;

