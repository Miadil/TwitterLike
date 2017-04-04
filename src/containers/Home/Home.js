import React from 'react';

import './Home.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';

const Home = () => (
  <div className="homepage">
    <TweetBox />
    <div className="tweets">
      { tweets.map((tweet, index) => (
        <Tweet
          key={index}
            {...tweet} // spread operator pour decomposer le tweet
        />
      ))}
    </div>
  </div>
);

export default Home;
