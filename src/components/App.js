import React, { Component } from 'react';
import './App.css';
import News from './News/News'
import Sidenews from './News/Sidenews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Feed</h1>
        </header>
        <News news={this.state.news1}/>
        <News news={this.state.news2}/>
        <Sidenews news={this.state.news3}/>
      </div>
    );
  }
}

export default App;
