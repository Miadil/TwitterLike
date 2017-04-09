import React from 'react';
import { Link } from 'react-router';

const shouldBeHighlighted = (str) =>
  str.match(/((@)|(#)|(https?:\/\/))[\w.]+/gi);

const highlightedStr = (str) =>
  str
    .split(/\s/g)
    .map((word, index) => {
      if (shouldBeHighlighted(word)) {
        if (word.includes('@')) {
          return (
            <Link
              className="highlight"
              to={`/tweets/${word.substring(1)}`}
              key={index}
            >{word} </Link>
          );
        }
        return <a href="#" key={index} className="highlight">{word} </a>
      }
      return <span key={index}>{word} </span>
    });

export {
  shouldBeHighlighted,
  highlightedStr,
};
