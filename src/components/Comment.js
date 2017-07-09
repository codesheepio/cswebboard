import React from 'react'

const Comment = ({ comment, commentor, created_date }) =>
  <div className="comment">
    <div className="content">
      {comment}
    </div>
    <span className="commentor">
      {commentor}
    </span>
    <span style={{ color: '#d33682' }}>|</span>
    <span className="created-date">
      {created_date}
    </span>
  </div>

export default Comment
