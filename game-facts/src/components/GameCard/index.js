import React from 'react';



function GameCard(props) {
    return (

        <div className='col-3 float-left'>
            <div id="game-1" className="card">
                <div className="card-body">
                    <h5 id="matchup-1" className="card-title">{props.matchup}</h5>
                    <h6 id="theLine-1" className="card-subtitle mb-2 text-muted">the line</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the
                card's content.</p>
                    <a href="#" className="card-link">See lineups</a>
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>

    )
}

export default GameCard;