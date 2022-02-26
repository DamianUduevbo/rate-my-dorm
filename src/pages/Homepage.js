import React from 'react';
import logo from '../components/images/logo.svg';
import SearchBar from '../components/SearchBar';
//import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <h1>
            <p>Welcome to RateMyDorms</p>
            <SearchBar placeholder="Search for a college"></SearchBar>
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



/* 
for (let i = 0; i<3; i++) {
    let loc = window.location
    loc = ("https://ufcfightpass.com/fighters/" + i);
    //let n = document.getElementsByClassName("profile__name")
    console.log(loc.search("b"));
}

for (let i = 0; i<3; i++) {
    let o = window.open("https://ufcfightpass.com/fighters/" + i, "_blank");
    let n = document.getElementsByClassName("profile__name");
    if (n != undefined || n !== undefined) {
        console.log(n[0].textContent);
    }
}

for (let i = 0; i<3; i++) {
    let o = window.open("https://ufcfightpass.com/fighters/" + i, "_blank");
    //let n = document.getElementsByClassName("profile__name");
    
    o.onload = function() {
        let pn = document.getElementsByClassName("profile__name");
        if (pn != undefined || pn !== undefined) {
            
            console.log(o.document.getElementsByClassName("profile__name")[0].textContent);
        }
    }
}

function doThings(n) {
    if (n != undefined || n !== undefined) {
        let pn = n.document.getElementsByClassName("profile__name");
        if ( (pn != undefined || pn !== undefined) ) {
            console.log("Hi!! " + pn.innerHTML);
            return pn.innerHTML
            //console.log(o.document.getElementsByClassName("profile__name"));
        }
        else {
            console.log("A");
        }
    }
    else {
        console.log("A1");
    }
}

for (let i = 1; i<4; i++) {
    let o = window.open("https://ufcfightpass.com/fighters/" + i, "_blank");
    //let n = document.getElementsByClassName("profile__name");
    setTimeout(() => {console.log("wait...")}, 5000);
    if (o != undefined || o !== undefined) {
        setTimeout(() => {doThings(o)}, 5000);
    }
}
*/

