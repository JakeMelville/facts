import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './assets/style/style.css'

function TwitterWidget() {
    return (
        <div className='col-3'>
            <h3 className='text-center'>Live Updates</h3>
            <div id="widget">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="FantasyLabsNBA"
                    options={{ height: 1000 }}
                />
            </div>
        </div>
    )
}

export default TwitterWidget;