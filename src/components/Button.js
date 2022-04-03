import React from 'react';
// import {useNavigate} from 'react-router-dom';

export const ButtonFoundDorm = (props) => {
    // const navigate = useNavigate();
    // {color: 'white', backgroundColor: 'transparent'}
    return <button id={props.id} style={props.style} onClick={props.onClick} >
        <div> {props.dormName} </div> {/* props.dormName */}
        <img src={props.src} alt={props.alt} style={ {height: 250, width: 250} } />
        <div >Rating - {props.rating} Star(s)</div> {/* props.Rating */}
    </button>
};

export const Button = (props) => {
    // {color: 'white', backgroundColor: 'transparent'}
    return <button id={props.id} style={props.style} tag="school-on-schools-page" onClick={props.onClick} >
        <img src={props.src} alt={props.alt} style={ {height: 250, width: 250, whiteSpace: "normal"} }/>
        <div > {props.schoolName} </div> {/* props.Rating */}
    </button>
};

export default Button;
