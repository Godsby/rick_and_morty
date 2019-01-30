import React, { Component } from 'react';
import Character from './Character';
import axios from 'axios';
import Displaycharacter from './Displaycharacter';


class App extends Component {

  constructor() {
    super();
    this.state= {
      characters: [],
      characterSelected: ''
    }
  }

  componentDidMount () {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(res => {
      this.setState({characters: res.data.results})
    })
  }

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      characterSelected: e.target.value
    })
  }
 
  render() {

    return (
      <div className="App">
        <Character 
          handleChange={this.handleChange}
          characters={this.state.characters}
        />
        {this.state.characterSelected ? (
        <Displaycharacter characterSelected={this.state.characterSelected} characters={this.state.characters}/>
        ) : null}
      </div>
    );
  }
}

export default App;
