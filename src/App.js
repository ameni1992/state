

import React, { Component } from 'react';
import "./App.css";
import Timer from './Timer';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      show: false
    }
  }
    toggle =() =>{
      this.setState({show: !this.state.show})
    }
  render() {
    return (
      <div className="App">
        {this.state.show?(
          <div>
          <img  src="/photo.jpg" alt=" " className="profile"/>
        <h1 className="name"> Amani Bouchnak</h1>
        <h4 className="bio">I am 29 years old ,i'm from Tabarka 
          <br/>
          and i'm studying the fullstack java script at GoMyCode. </h4>
          <h4 className="profession"> Future fullstask Javascript developer.</h4>
        </div>
        ): null}
        
        <button className="btn" onClick={this.toggle}>Click Here</button>
        <Timer/>
      </div>
    )
  }
  }

