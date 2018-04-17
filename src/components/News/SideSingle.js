import React from 'react'

const SideSingle = ({item}) => (
  <div>
    <h5>{item.source.name}</h5>
    <a href={item.url} target="_blank">Visit</a>
    <p>
      {item.description}
    </p>
  </div>
)

export default SideSingle