import React from 'react';
import logo from '../components/images/logo.svg';
import SearchBar from '../components/SearchBar';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Schools from './Schools';

const Homepage = () => {
  return (
    <div>

        <h1>
            <p>Welcome to RateMyDorms</p>
            <SearchBar placeholder="Search for a college"></SearchBar> {/*REPLACE W A DROPDOWN*/}
            <input type="submit" />
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
            Learn React
        </a>
        <button onClick={() => console.log("Hello")}>Browse Schools</button>

    </div>)
};

export default Homepage;