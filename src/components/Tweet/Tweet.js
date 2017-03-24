import React from 'react';

import './Tweet.css';
const Tweet = props => (
  <div className="conttweet">
    <div className="tweet">
        <div className="avatar">
            <img src={props.avatar} alt="presentation"/>
        </div>
        <div className="data">
            <div className="infos">
                <strong>{props.fullname}</strong>
            </div>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </div>
    </div>
  </div>
);

export default Tweet;
