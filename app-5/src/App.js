import React, { Component } from 'react';
import Image from "./Image";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image myImage={"https://http.cat/509"}/>
      </div>
    );
  }
}

export default App;
