import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
        time:0
        }
    }
    
        
    
    render() {
        return (
            <div>
              <button>timer</button>  
              <span>  {this.state.time} </span>
            </div>
        )
    }
}
