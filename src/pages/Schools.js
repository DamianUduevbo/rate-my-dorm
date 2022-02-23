import React from 'react';
// import neu from '../components/images/neu.png';
// import bu from '../components/images/bu.png';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import {useNavigate} from 'react-router-dom';

import { db } from '../firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
//#RATIO MY PROFESSOR
const Schools = () => {
    const [colleges, setColleges] = useState([])
    const collegeCollection = collection(db, "schools");

    useEffect( () => {
        const getColleges = async () => {
            const data = await getDocs(collegeCollection);
            setColleges(data.docs.map( (v) => 
                ({...v.data(), id: v.id})
            ))
        }
        getColleges();
    })

    const navigate = useNavigate();

    const createButton = (id, style, src, schoolName, nav) => {
        return <Button id={id} style ={style} src={src} alt={id+".png"} schoolName={schoolName}
                onClick = {() => {navigate(nav)} } />
    }

    /* */
    const searchAlgo = (t) => {
        listOfSchools = document.getElementById("List of schools")
    
        listOfSchools.map( (v) => console.log(v) )
        // map( return <Button of school> {" \n"} )  
    }
    

    return <div>
        {/* EXAMPLE OF HOW THIS WILL LOOK. USE A DB AND AN ALGO TO LOAD THESE */}
        
        <h1>
            <SearchBar placeholder="Search for a college" onChange={() => }></SearchBar>
        </h1>
        <div id="List of schools">
            {colleges.map( (v) => {
                return createButton(v.id, {color: 'white', backgroundColor: 'transparent'}, null, v._name, v.navigate) //<div id={v.id}> {v._name} </div>
                })
            }
            {/*
            <Button id="neu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                    src={neu} alt="Northeastern-University.png"
                    schoolName="Northeastern University" onClick={() => {navigate("/school-page-northeastern") }} />
            {" \n"}
            <Button id="bu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                    src={bu} alt="Boston-University.png" 
                    schoolName="Boston University" />
            */}
        </div>
    </div>
}

export default Schools;
