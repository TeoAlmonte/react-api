import React, { Component } from 'react'
import axios from 'axios'
import SideSingle from './SideSingle'
import Error from './Error'

class Sidenews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidenews: [],
      error: false
    }
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=b4278c14457848a2816778ab41646319`
    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      })
  }

  renderItems() {
    if(!this.state.error) {
      return this.state.sidenews.map((item) => (
        <SideSingle key={item.url} item={item} />
      ))
    } else {
      console.log('error found')
      return <Error />
    }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default Sidenews