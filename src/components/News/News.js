import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=b4278c14457848a2816778ab41646319`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          news: data.articles
      })
    })
    .catch((error) => console.log(error))
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.irl} item={item} />
    ))
  }


  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default News