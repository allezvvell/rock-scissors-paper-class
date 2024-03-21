import React, { Component } from 'react'
import './App.css';
import Box from './component/Box';
import Score from './component/Score';
import Thumb from './component/Thumb';



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
      result: '',
      userScore: 0,
      computerScore: 0
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
      if(computer.name === SCISSORS){
        this.setState({userScore:this.state.userScore + 1});
        return 'win'
      }else{
        this.setState({computerScore:this.state.computerScore + 1});
        return 'lose'
      }
    }else if(user.name === PAPER){
      if(computer.name === ROCK){
        this.setState({userScore:this.state.userScore + 1});
        return 'win'
      }else{
        this.setState({computerScore:this.state.computerScore + 1});
        return 'lose'
      }
    }else if(user.name === SCISSORS){
      if(computer.name === PAPER){
        this.setState({userScore:this.state.userScore + 1});
        return 'win'
      }else{
        this.setState({computerScore:this.state.computerScore + 1});
        return 'lose'
      }
    }
  }
  gameStart = (e) => {
    e.target.classList.add('hide');
    e.target.nextSibling.classList.remove('hide');
    document.querySelector('.score-wrap').classList.remove('hide');
  }
  shareUrl = () => {
    if (navigator.share) {
        navigator.share({
            title: '가위바위보 게임',
            url: 'https://rock-scissors-papper-allezvvell.netlify.app',
        });
    }else{
        alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='score-wrap hide'>
          <p className='game-title'>ROCK SCISSORS PAPER!</p>
          <div className='score-container'>
            <Score title='You' score={this.state.userScore}/>
            <Score title='Computer' score={this.state.computerScore}/>
          </div>
        </div>
        <div className='box-wrap'>
          <Box title='You' item={this.state.userSelect} result={this.state.result}/>
          <Box title='Computer'item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className='button-wrap'>
          <button className='start-btn' onClick={(e) => this.gameStart(e)}>GAME START</button>
          <div className='button-container hide'>
            <button className='scissors' onClick={() => this.play('scissors')}>가위</button>
            <button className='rock' onClick={() => this.play('rock')}>바위</button>
            <button className='paper' onClick={() => this.play('paper')}>보</button>
          </div>
        </div>
        <div className='thumbs-wrap'>
          <Thumb title='you' result={this.state.result}/>
          <Thumb title='computer' result={this.state.result}/>
        </div>
        <div className='header-btn-wrap'>
          <button className='restart-btn' onClick={() => {window.location.reload()}}>Restart</button>
          <button className='share-btn' onClick={() => this.shareUrl()}>Share</button>
        </div>
        <div className='cover'>반응형 작업중 입니다!</div>
      </div>
    )
  }
}



