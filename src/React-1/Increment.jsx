import React, { Component } from 'react'

class Increment extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
            
        }

    }


    incrment=()=>{
        this.setState({count : this.state.count + 1})
    }

  render() {
    return (
      <div>
        <h1> count : {this.state.count}</h1>

        <button onClick={()=>{this.setState({count : this.state.count + 1})}}>incrment</button>

        <button onClick={()=>this.setState({count : 0})}>Zero</button>

      </div>
    )
  }
}

export default Increment