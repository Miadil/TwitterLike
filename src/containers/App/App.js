import React from 'react';

import './App.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
console.log(tweets);
const App = () => (
  <main>
    <Tweet
        avatar={tweets[1].avatar}
        fullname={tweets[1].fullname}
        content={tweets[1].content}
    />
    <Tweet
        avatar={tweets[2].avatar}
        fullname={tweets[2].fullname}
        content={tweets[2].content}
    />
  </main>
);

export default App;
