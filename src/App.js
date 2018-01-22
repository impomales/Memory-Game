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
      cards: this.getCards()
    };
    
    this.getCards = this.getCards.bind(this);
    this.flipCard = this.flipCard.bind(this);
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
    let cards = this.state.cards.slice();
    cards[id] = Object.assign({}, cards[id]);
    cards[id].isFaceUp = !cards[id].isFaceUp;
    this.setState({cards});
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
