import React , { PropTypes } from 'react';

import './Tweet.css';
// const Tweet = props => ( {props.avatar} );
// pour aceder au proprieter en es6  on destructure le compo
const Tweet = ( { avatar, fullname, content, username, date }) => (
  <div className="conttweet">
    <div className="tweet">
        <div className="avatar">
            <img src={ avatar } alt="avatar"/>
        </div>
        <div className="data">
            <div className="infos">
              <strong className="fullname">{ fullname }</strong>
                <small className="gray">@{ username }</small>
                <small className="gray date">{ date }</small>
               </div>
            <div className="content">
                <p>{ content }</p>
            </div>
        </div>
    </div>
  </div>
);

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Tweet;
