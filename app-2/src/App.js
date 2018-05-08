import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      shoes: [
        "Nike",
        "Adidas",
        "Puma",
        "Crocks"
      ]
    }
  }
  render() {
    let displayShoes = this.state.shoes.map ( (element, index) => {
  return(
     <h1 key = {index} > {element} </h1>
    )
  })
    
    return (
    <div className='App'>
    {displayShoes}
    </div>
    );
  }
}

export default App;
