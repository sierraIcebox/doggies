import React, { Component } from 'react';
// import DogSingle from './DogSingle';

class Dogs extends Component {

    constructor(props){
        super(props);
        this.state = {
            dogs:[],
        };
    }
    

    componentDidMount(){
        const url = 'https://dog.ceo/api/breeds/list/all'

        fetch(url)
        .then((response) =>{
            return response.json()
        })
        .then((data)=>{
            
                console.log(Object.keys(data.message))
        })
        .catch((error) => console.log(error))
    }
  
        

    render(){
        return (
            <ul>
                {this.dogs}
            </ul>
            
        )
    }

}

export default Dogs;
