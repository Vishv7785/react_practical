import React, { Component } from 'react'

class Unmount extends Component {

    constructor(){
        super();
        this.state = {
            name : "Vishv"
        }
    }

    componentDidMount(){
        console.log("Compoent mouting phase.. 1!")
    }

    componentDidUpdate(){
        console.log("Component updating phase.. 2")
    }

    componentWillUnmount(){
        console.log("unmouting phase.. 3!")
    }

  render() {
    return (
      <div>
        
        
        <h1>hello name :- {this.state.name}</h1>


      </div>
    )
  }
}

export default Unmount;