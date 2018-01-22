import React from 'react';
import './Card.css';

const Card = (props) => {
    const { color, isFaceUp } = props;
    let cardStyle = {
        backgroundColor: isFaceUp ? color : '#9bc9a1'
    };
    
    return (
        <div 
            style={cardStyle} 
            className="card"
            onClick={() => props.flipCard(props.id)}>
        </div>
    );
};

export default Card;