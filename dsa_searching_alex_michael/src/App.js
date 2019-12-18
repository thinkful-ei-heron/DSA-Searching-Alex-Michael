import React from 'react';
import logo from './logo.svg';
import './App.css';
import search from './Search/Search';

class App extends React.Component {
  state = {
    array: '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5',
    message: null
  }


  componentDidMount() {
    this.setState({
      array: this.state.array.split(' ').map(x => Number(x))
    })
  }

  handleLinearClick = (e) => {    
    this.setState({
      message: search.indexOf(this.state.array, Number(e))
    })
  }

  handleBinaryClick = (e) => {
    this.setState({
      message: search.binarySearch(this.state.array.sort((a, b) => a - b), Number(e))
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SEARCH</h1>
        <form>
          <input id='input'></input>
          <button onClick={e => {
              e.preventDefault()
              this.handleLinearClick(document.getElementById('input').value)
            }}>Linear Search</button>
          <button onClick={e => {
            e.preventDefault()
            this.handleBinaryClick(document.getElementById('input').value)
          }}>Binary Search</button>
        </form>
        <h2>{this.state.message}</h2>   
      </div>
    );
  }
}

export default App;
