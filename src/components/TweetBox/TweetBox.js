//statefull

import React, { Component, PropTypes } from 'react';

import './TweetBox.css';

class Tweetbox extends Component {
  static propTypes = {
    publish: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = ({target : { value } }) => { //des qu'un changement est operer dans textarea
      this.setState({ value: value});
  };

  handelSubmit = () => { //si on envois un tweets
    const { value } = this.state;
    const { publish } = this.props;

    if(value.length && value.length <= 140){
        // publier
        publish(value);

        this.setState({value: ''});
    }
  };

  handelFocus = ( {type} ) => {
    this._textarea.placeholder = type === 'focus' ? ' ' : "Composez votre tweet";
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
            ref={t => this._textarea = t}//on declare un ref pour pouvoir accer au placeholder
            onFocus={this.handelFocus}
            onBlur={this.handelFocus}
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
