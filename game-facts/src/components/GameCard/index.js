import React, { useState, useEffect }from 'react';
import API from '../../utils/API'


function GameCard() {

    const gamesToday = ''

    const [gameState1, setGameState1] = useState('')
    const [gameState2, setGameState2] = useState('')
    const [gameState3, setGameState3] = useState('')
    const [gameState4, setGameState4] = useState('')
    const [gameState5, setGameState5] = useState('')
    const [gameState6, setGameState6] = useState('')
    const [gameState7, setGameState7] = useState('')
    const [gameState8, setGameState8] = useState('')
    const [gameState9, setGameState9] = useState('')
    const [gameState10, setGameState10] = useState('')
    const [gameState11, setGameState11] = useState('')



    API.getDailySchedule()
    .then(res => {
       console.log(res.data.data[0]);

       setGameState1(`${res.data.data[0].teams[0]}(+${res.data.data[0].sites[3].odds.spreads.points[0]}) vs ${res.data.data[0].teams[1]}(${res.data.data[0].sites[3].odds.spreads.points[1]})`)
       
       setGameState2(`${res.data.data[0].teams[0]}(+${res.data.data[0].sites[3].odds.spreads.points[0]}) vs ${res.data.data[0].teams[1]}(${res.data.data[0].sites[3].odds.spreads.points[1]})`)
    })

    return (
        <div className='p-2 col-9'>
            <div className='row'>
                <div id="game-1" className="card col-3">
                    <div className="card-body">
                        <h5 id="matchup-1" className="card-title">{gameState1}</h5>
                        <h6 id="theLine-1" className="card-subtitle mb-2 text-muted">the line</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                card's content.</p>
                        <a href="#" className="card-link">See lineups</a>
                        {/* <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;