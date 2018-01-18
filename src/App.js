import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.getCards()
    };
    
    this.getCards = this.getCards.bind(this);
  }
  
  // returns an array of color pairs in random order.
  getCards() {
    let cards = [];
    let colors = this.props.colors.concat(this.props.colors);
    const NUM_CARDS = colors.length * 2;
      
    for (let i = 0; i < NUM_CARDS; i++) {
      let randomIndx = Math.floor(Math.random() * colors.length);
      cards.push(colors[randomIndx]);
      colors.splice(randomIndx, 1);
    }
    return cards;
  }
  
  render() {
    const cards = this.state.cards.map((card, index) => (
      <Card key={index} card={card}/>
    ));
    
    return (
      <div>
        <Header />
        { cards }
      </div>
    );
  }
}

App.defaultProps = {
  colors: [
    "Black","Blue","Red","Green",
    "Orange","Fuchsia","Purple","Yellow"
  ]
};

export default App;
