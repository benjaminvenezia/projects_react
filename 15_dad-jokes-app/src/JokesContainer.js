import React, { Component } from 'react';
import Joke from './Joke';
import './JokesContainer.css';
import axios from 'axios';
import smiley from './smiley.png';
const API_GET_JOKE = "https://icanhazdadjoke.com/";

 class JokesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: [],
            isLoaded: false
        }

        localStorage.setItem('firstLoad', true); 

        this.getNewJokes = this.getNewJokes.bind(this);
    }

    async componentDidMount(){
     

        let endpoints = Array(this.props.nbJokes).fill(API_GET_JOKE);

        axios.all(endpoints.map((endpoint) => axios.get(endpoint, {headers: { Accept: "application/json"}}))).then(
            (jokes) => this.setState({jokes: jokes, isLoaded: true}),
        );
    } 

    getNewJokes() {

        this.setState({
            isLoaded: false
        });

        let endpoints = Array(this.props.nbJokes).fill(API_GET_JOKE);
        axios.all(endpoints.map((endpoint) => axios.get(endpoint, {headers: { Accept: "application/json"}}))).then(
            (jokes) => this.setState({jokes: jokes, isLoaded: true}),
        );

    }

  render() {

    if(localStorage.getItem('firstLoad') == true) {
        console.log('on entreeee');
        localStorage.setItem('jokes', JSON.stringify(this.state.jokes));  
        localStorage.removeItem('firstLoad');
        localStorage.setItem('firstLoad', false);
    } 



    const jokesArr = JSON.parse(localStorage.getItem('jokes')).map((joke) => <Joke key={joke.data.id} jokeContent={joke.data.joke} />);
        
    if(!this.state.isLoaded) {
        return (
        <div className='App-spinner'>
            <i className="fas fa-spinner fa-spin"></i>
        </div>
        )
    } else {
        return (
        
            <div className='JokesContainer'>
                <div className='JokesContainer-header'>
                    <h1>Dad Jokes</h1>
                    <img src={smiley}/>
                    <button onClick={this.getNewJokes}>New Jokes</button>
                </div>
                <div className='JokesContainer-content'>
                    {jokesArr}   
                </div>
            </div>
        );
    }
  }
}

export default JokesContainer;