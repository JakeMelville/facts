import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import TwitterWidget from '../components/TwitterWidget';
import API from '../utils/API'


function Scoreboard(props) {


    const [gamesToday, setGamesTodayState] = useState('')

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
    const [gameState12, setGameState12] = useState('')


    useEffect(() => {

        API.getDailySchedule()
            .then(res => {

                setGamesTodayState(res.data.data.length);

                setGameState1(`${res.data.data[0].teams[0]}(${res.data.data[0].sites[3].odds.spreads.points[0]}) vs ${res.data.data[0].teams[1]}(${res.data.data[0].sites[3].odds.spreads.points[1]})`)
                setGameState2(`${res.data.data[1].teams[0]}(${res.data.data[1].sites[3].odds.spreads.points[0]}) vs ${res.data.data[1].teams[1]}(${res.data.data[1].sites[3].odds.spreads.points[1]})`)
                setGameState3(`${res.data.data[2].teams[0]}(${res.data.data[2].sites[3].odds.spreads.points[0]}) vs ${res.data.data[2].teams[1]}(${res.data.data[2].sites[3].odds.spreads.points[1]})`)
                setGameState4(`${res.data.data[3].teams[0]}(${res.data.data[3].sites[3].odds.spreads.points[0]}) vs ${res.data.data[3].teams[1]}(${res.data.data[3].sites[3].odds.spreads.points[1]})`)
                setGameState5(`${res.data.data[4].teams[0]}(${res.data.data[4].sites[3].odds.spreads.points[0]}) vs ${res.data.data[4].teams[1]}(${res.data.data[4].sites[3].odds.spreads.points[1]})`)
                setGameState6(`${res.data.data[5].teams[0]}(${res.data.data[5].sites[3].odds.spreads.points[0]}) vs ${res.data.data[5].teams[1]}(${res.data.data[5].sites[3].odds.spreads.points[1]})`)
                setGameState7(`${res.data.data[6].teams[0]}(${res.data.data[6].sites[3].odds.spreads.points[0]}) vs ${res.data.data[6].teams[1]}(${res.data.data[6].sites[3].odds.spreads.points[1]})`)
                setGameState8(`${res.data.data[7].teams[0]}(${res.data.data[7].sites[3].odds.spreads.points[0]}) vs ${res.data.data[7].teams[1]}(${res.data.data[7].sites[3].odds.spreads.points[1]})`)
                setGameState9(`${res.data.data[8].teams[0]}(${res.data.data[8].sites[3].odds.spreads.points[0]}) vs ${res.data.data[8].teams[1]}(${res.data.data[8].sites[3].odds.spreads.points[1]})`)
                setGameState10(`${res.data.data[9].teams[0]}(${res.data.data[9].sites[3].odds.spreads.points[0]}) vs ${res.data.data[9].teams[1]}(${res.data.data[9].sites[3].odds.spreads.points[1]})`)
                setGameState11(`${res.data.data[10].teams[0]}(${res.data.data[10].sites[3].odds.spreads.points[0]}) vs ${res.data.data[10].teams[1]}(${res.data.data[10].sites[3].odds.spreads.points[1]})`)
                setGameState12(`${res.data.data[11].teams[0]}(${res.data.data[11].sites[3].odds.spreads.points[0]}) vs ${res.data.data[11].teams[1]}(${res.data.data[11].sites[3].odds.spreads.points[1]})`)
            })
            .catch((err) => console.log(err));
    }, [gameState1])




    return (
        <div>
            <Header />
            <div className='containter-fluid'>
                <div className='row'>
                    <TwitterWidget />
                    <div className='col-9'>
                        <GameCard
                            gameState1={gameState1}
                            gameState2={gameState2}
                            gameState3={gameState3}
                            gameState4={gameState4}
                            gameState5={gameState5}
                            gameState6={gameState6}
                            gameState7={gameState7}
                            gameState8={gameState8}
                            gameState9={gameState9}
                            gameState10={gameState10}
                            gameState11={gameState11}
                            gameState12={gameState12}
                        />
                    </div>
                </div>
            </div >

        </div >

    )
}

export default Scoreboard;