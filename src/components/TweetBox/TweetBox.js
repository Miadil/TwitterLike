//statefull

import React, { Component } from 'react';

import './TweetBox.css';

class Tweetbox extends Component {
  state = {
    value: '',
  };

  handleChange = ({target : { value } }) => {
      this.setState({ value: value});
  };

  handelSubmit = () => {
    const { value } = this.state;
    if(value.length && value.length <= 140){
        // publier
        
        this.setState({value: ''});
    }
  };
  render(){
    const { value } = this.state;

    return (
        <div className="tweetbox">
          <textarea
            rows={3}
            placeholder="Composez votre tweet"
            value={value}
            onChange={this.handleChange}
            className={value.length > 140 && 'alert'}
          />
          <div className="action">
            <span className="count">{140 - value.length}</span>
            <button
              type="button"
              disabled={!value.length || value.length > 140}
              onClick={this.handelSubmit}
            >
                Tweet
              </button>
          </div>
        </div>
    );
  }
}
export default Tweetbox;
