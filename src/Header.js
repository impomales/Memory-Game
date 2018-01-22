import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="header">
        <div className="header-title">Memory Game</div>
        <div 
            className="header-newGame"
            onClick={props.newGame}>
            New Game
        </div>
    </div>
);

export default Header;