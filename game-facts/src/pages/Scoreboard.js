import React from 'react';
import Header from '../components/Header/index.js';
import GameCard from '../components/GameCard/index.js';
import TwitterWidget from '../components/TwitterWidget/index';
import { propTypes } from 'react-bootstrap/esm/Image';

function Scoreboard(props) {
    return (
        <div>
            <Header />
            <div className='row'>
                <TwitterWidget />
                <GameCard />
            </div>

        </div>

    )
}

export default Scoreboard;