import React from 'react'

const Topic = ({ title, content }) =>
  <div className="topic">
    <div className="title">
      {title}
    </div>
    <div className="content">
      {content}
    </div>
  </div>

export default Topic
