import React from 'react'

const NewSingle = ({item}) => (
  <div className="item">
    <p> {item.title} </p>
    <p> {item.description} </p>
    <img src={item.urlToImage} alt={item.title}  height="50" />
    <small> Article by {item.author} </small>
  </div>
)

export default NewSingle
