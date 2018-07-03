import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as acitons from 'actions'
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {
  state = { comment: ''}

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}


export default connect(null, acitons)(requireAuth(CommentBox))