import React, { Component } from 'react'

export default class ResultBox extends Component {
    constructor(props){
      super(props);        
    }
  render() {
    let sentence = '';
    if(this.props.result === 'tie'){
      sentence = '비겼습니다'
    }else if(this.props.result === 'win'){
      sentence = '당신이 이겼습니다'
    }else if(this.props.result === 'lose'){
      sentence = '당신이 졌습니다'
    }
    return (
      <div className='result-box'>
        {sentence}
      </div>
    )
  }
}
