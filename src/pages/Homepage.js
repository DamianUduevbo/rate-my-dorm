import React from 'react';
import logo from '../components/images/logo.svg';
import SearchBar from '../components/SearchBar';
//import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <h1>
            <p>Welcome to RateMyDorms</p>
            <div>Find college housing thats right for you.</div>
            <SearchBar placeholder="Search for a college"></SearchBar>
            <input type="submit" />
        </h1>
        
        
    </div>)
};

export default Homepage;