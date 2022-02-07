import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export const ButtonFoundDorm = (props) => {
    // {color: 'white', backgroundColor: 'transparent'}
    return <button id={props.id} style={props.style} >
        <div> {props.dormName} </div> {/* props.dormName */}
        <img src={props.src} alt={props.alt} style={ {height: 250, width: 250} }/>
        <div >Rating - {props.rating} Star(s)</div> {/* props.Rating */}
    </button>
};

const Button = (props) => {
    // {color: 'white', backgroundColor: 'transparent'}
    return <button id={props.id} style={props.style} onClick={() => 
                    {return <Link to="/school-page" type='button' >School Profile Page (dev)</Link>}}>
        <img src={props.src} alt={props.alt} style={ {height: 250, width: 250} }/>
        <div > {props.schoolName} </div> {/* props.Rating */}
    </button>
};

export default Button;
