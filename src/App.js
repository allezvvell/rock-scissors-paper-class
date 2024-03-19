import React, { Component } from 'react'
import './App.css';
import Box from './component/Box';
import ResultBox from './component/ResultBox';



const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

const choice = {
  rock: {
    name : ROCK,
    img : 'https://i.pinimg.com/originals/af/f9/83/aff98370aa2d91f0d23c79ec03fb8330.png'
  },
  scissors: {
    name : SCISSORS,
    img : 'https://media.istockphoto.com/id/1043551106/vector/scissors-vector-cartoon.jpg?s=612x612&w=0&k=20&c=iu7Ca7ucLnq0HyalszRYYjO29XFnbWlnP2MpoMop0iU='
  },
  paper: {
    name : PAPER,
    img : 'https://i.pinimg.com/originals/af/30/5c/af305cd182d90aed35da8a62c23fed5e.jpg'
  }
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: ''
    }
  }
  play = (userChoice) => {
    this.setState({userSelect:choice[userChoice]});
    let computerChoice = this.randomChoice();
    this.setState({computerSelect:choice[computerChoice]});
    this.setState({result:this.judgement(choice[userChoice],choice[computerChoice])});
  }
  randomChoice = () => {
    const arr = Object.keys(choice);
    return arr[Math.floor(Math.random()*arr.length)];
  }
  judgement = (user,computer) => {
    if(user.name === computer.name){
        return 'tie'
    }else if(user.name === ROCK){
      return computer.name === SCISSORS ? 'win' : 'lose';
    }else if(user.name === PAPER){
      return computer.name === ROCK ? 'win' : 'lose';
    }else if(user.name === SCISSORS){
      return computer.name === PAPER ? 'win' : 'lose';
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='box-wrap'>
          <Box title='You' item={this.state.userSelect} result={this.state.result}/>
          <Box title='Computer'item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className='button-wrap'>
          <button className='scissors' onClick={() => this.play('scissors')}>가위</button>
          <button className='rock' onClick={() => this.play('rock')}>바위</button>
          <button className='paper' onClick={() => this.play('paper')}>보</button>
        </div>
        <ResultBox result={this.state.result}/>
      </div>
    )
  }
}



