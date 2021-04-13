import React from 'react';

function GameCard() {
    return (
        <div className='row'>
            <div id="game-1" className="card col-3">
                <div className="card-body">
                    <h5 id="matchup-1" className="card-title">Card title</h5>
                    <h6 id="theLine-1" className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the
                card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default GameCard;