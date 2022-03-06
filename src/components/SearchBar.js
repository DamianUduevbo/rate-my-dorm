import React from 'react';

const SearchBar = (props) => {
  return <input id={props.id} type='text' placeholder={props.placeholder} onChange={props.onChange}>{props.text}</input>;
};

export default SearchBar;
