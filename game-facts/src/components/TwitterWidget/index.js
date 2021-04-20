import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function TwitterWidget() {
    return (
        <div className='col-3'>
            <h3 className='text-center'>Live Updates</h3>
            <div>
                <TwitterTimelineEmbed
                    sourceType="https://twitter.com/FantasyLabsNBA?ref_src=twsrc%5Etfw"
                    screenName='FantasyLabsNBA'
                />
            </div>
        </div>
    )
}

export default TwitterWidget;