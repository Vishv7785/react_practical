import react, { Component } from "react";

class Mount extends Component{
    constructor(){
        super();
        this.state = {
            user : []
        }
    }

    componentDidMount() {
    fetch('https://fakestoreapi.com/users')
    .then (res =>{
        if (!res.ok) {
             throw new Error('Failed to fetch data');
        }
        return res.json();
    })
    .then(data =>{
        this.setState({user : data});
    })
}
render (){
    return(
         <h1>name : {this.state.name}</h1>
    )
}

}


export default Mount