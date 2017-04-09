import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import './ByUsername.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';


class ByUsername extends Component {
  static propTypes ={
    params: PropTypes.object.isRequired,
  };

  state ={
    tweets: tweets,
  };

  publish = tweet => {
    const { tweets } = this.state;

    this.setState({
      tweets: [{
        avatar: 'https://pbs.twimg.com/profile_images/438317495896657920/zoiIwICY_400x400.jpeg',
        username: 'Abdou',
        fullname: 'Abdou Kerkeb',
        content: tweet,
        date: moment().format('DD/MM/YYYY'),
      },
      ...tweets,
    ],
    });
  };

  remove = index => {
    const { tweets } = this.state;

    //je recuper l'etta actuel de tweets
    // on passe en revue tout les index jusqua etre sur la bonne et des que
    //l'on i et on ne renvois pa le dit index de ce fait quand set state
    //sexecute on obient un resulta sans le tweet suprimer

    this.setState({ tweets: tweets.filter((tweet, i) => i !== index)});
  };
  render () {
    const { tweets } = this.state;
    const { params } = this.props;

    return(
      <div className="homepage">
        <h1>{params.username}</h1>

        <TweetBox publish={this.publish} />
        <div className="tweets">
          { tweets.map((tweet, index) => tweet.username === params.username &&  (
            <Tweet
              //toute les info passer ici son recuperable dans conposent tweet
              key={index}
              index={index}
              remove={this.remove}
                {...tweet} // spread operator pour decomposer le tweet
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ByUsername;
