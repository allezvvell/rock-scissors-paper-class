import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props){
        super(props);        
    }
  render() {
    let result = this.props.result;
    if(this.props.title === 'Computer' && this.props.result !== 'tie' && this.props.result !== ''){
      if(result === 'win'){
        result = 'lose'
      }else if(result === 'lose'){
        result = 'win'
      }
    }
    return (
    <div className={result}>
        <h1 className='title'>{this.props.title}</h1>
        <span className='img-box'><img src={this.props.item && this.props.item.img} alt='가위바위보 이미지'/></span>
        <h2 className='result'>{result}</h2>
     </div>
    )
  }
}
