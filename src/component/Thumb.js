import React, { Component } from 'react'

export default class Thumb extends Component {
  render() {
    let result = this.props.result;
    if(this.props.title === 'computer' && this.props.result !== 'tie' && this.props.result !== ''){
      if(result === 'win'){
        result = 'lose'
      }else if(result === 'lose'){
        result = 'win'
      }
    }
    return (
        <div className={`${this.props.title} ${result}`}>
            <img src='./img/thumb.png' alt='엄지척 이미지'/>
        </div>
    )
  }
}
