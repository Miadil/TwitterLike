import React , { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import './Tweet.css';

// import { highlightedstr } from '../../helpers';
// const Tweet = props => ( {props.avatar} );
// pour aceder au proprieter en es6  on destructure le compo
class Tweet extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  };

  static defaultProps = {
    date:moment().format('DD/MM/YYYY'),
  };
  state  = {
    isFocus:false,
  };
//on destructure event.type pour obtenir le type de l'evement
  handelFocus = ({ type }) =>{
    this.setState({isFocus: type === 'mouseenter'})//je test legaliter de ;du type si c4est ok is focus passe a true
  };
  render() {
    const { avatar, fullname, content, username, date, index, remove } = this.props;
    const { isFocus }= this.state;
    return(
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
                    { username === 'Abdou' && (
                      <FontAwesome
                        className="gray trash"
                        name={isFocus ? 'trash' : 'trash-o'}
                        onMouseEnter={this.handelFocus}
                        onMouseLeave={this.handelFocus}
                        onClick={() => remove(index)}//si on passe un parametre autre que ce quon a besoin on doit utilier cette syntax
                      />
                    )}
                   </div>
                <div className="content">
                    <p>{ content }</p>
                </div>
            </div>
        </div>
      </div>
    );
  }

}
export default Tweet;
