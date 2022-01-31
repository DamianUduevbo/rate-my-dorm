import React from 'react';

const SearchBar = (props) => {
  return <input type='text' placeholder={props.placeholder}>{props.text}</input>;
};

export default SearchBar;
