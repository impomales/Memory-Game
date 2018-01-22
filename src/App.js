import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /* 
      cards: [
        {
          color: '#ccc',
          isFaceUp: false,
          isMatched: false
        }
      ]
    */
    this.state = {
      cards: this.getCards(),
      prevId: null
    };
    
    this.getCards = this.getCards.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }
  
  // returns an array of color pairs in random order.
  getCards() {
    let cards = [];
    let colors = this.props.colors.concat(this.props.colors);
    const NUM_CARDS = colors.length;
      
    for (let i = 0; i < NUM_CARDS; i++) {
      let randomIndx = Math.floor(Math.random() * colors.length);
      let cardObjct = {
        id: i,
        color: colors[randomIndx],
        isFaceUp: false,
        isMatched: false
      };
      cards.push(cardObjct);
      colors.splice(randomIndx, 1);
    }
    return cards;
  }
  
  // flip card with id.
  flipCard(id) {
    if (this.state.cards[id].isMatched) return;
    let cards = this.state.cards.slice();
    cards[id] = Object.assign({}, cards[id]);
    cards[id].isFaceUp = !cards[id].isFaceUp;
    this.setState({cards}, () => {
      setTimeout(() => this.checkMatch(id), 1000);
    });
  }
  
  checkMatch(id) {
    let prevId = this.state.prevId;
    if (id === prevId) {
      prevId = null;
      this.setState({prevId});
      return;
    }
    let cards = this.state.cards.slice();
    cards[id] = Object.assign({}, cards[id]);
    cards[prevId] = Object.assign({}, cards[prevId]);
    if (prevId && cards[id].color === cards[prevId].color) {
      cards[prevId].isMatched = true;
      cards[id].isMatched = true;
      prevId = null;
    } else if (prevId || prevId === 0) {
      cards[prevId].isFaceUp = false;
      cards[id].isFaceUp = false;
      prevId = null;
    } else prevId = id;
    this.setState({cards, prevId});
  }
  
  render() {
    const cards = this.state.cards.map((card, index) => (
      <Card key={index} {...card} flipCard={this.flipCard}/>
    ));
    
    return (
      <div>
        <Header />
        <div className='cardList'>
          { cards }
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  colors: [
    "#99f7f2","#166dba","#b72817","#75ba16",
    "#ba7016","#e886d5","#4716ba","#bab116"
  ]
};

export default App;
