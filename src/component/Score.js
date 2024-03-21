import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    return (
      <div>
      {this.props.score}
      </div>
    )
  }
}
