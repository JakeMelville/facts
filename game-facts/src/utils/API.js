import axios from 'axios';
import hiddenKey from './hiddenKey';


export default {
    getDailySchedule: function() {
        console.log(hiddenKey.key);
        return axios.get('https://api.the-odds-api.com/v3/odds/?apiKey=' + "f75f404098484a5b2dbde547878fca0a" + '&sport=basketball&region=us&mkt=spreads')
    }
}















// const oddsUrl = 'https://api.the-odds-api.com';
// const apiKey = key.oddsKey;
// const oddsEndPoint = '/v3/odds/?apiKey=';
// const sport = 'basketball';
// const region = 'us';
// const mkt = 'spreads';

// const query = `${oddsUrl}${oddsEndPoint}${apiKey}&sport=${sport}&region=${region}&mkt=${mkt}`

// // function getOdds() {
//     fetch(query)
//         .then(response => response.json())
//         .then((scheduleData) => {
//             document.getElementById('matchup').textContent = scheduleData.data[0].teams[0] + ' vs ' + scheduleData.data[7].teams[1];
//             document.getElementById('theLine').textContent = 'Kings +' + scheduleData.data[7].sites[0].odds.spreads.points[0];
//             console.log(scheduleData)
//         })

//         .catch(error => console.log(error))

// }
// getOdds();
// // getGames()