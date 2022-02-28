import App from '../App';

import React from 'react';
import ReactDOM from 'react';
import neu from '../components/images/neu.png';
import bu from '../components/images/bu.png';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import {Route, useNavigate} from 'react-router-dom';
import {SchoolProfileProto, SchoolProfile} from './SchoolProfile'

import { db } from '../firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
//#RATIO MY PROFESSOR


const Schools = () => {
    const navigate = useNavigate();
    const [colleges, setColleges] = useState([])
    
    const collegeCollection = collection(db, "schools");

    useEffect( () => {
        const getColleges = async () => {
            const data = await getDocs(collegeCollection);
            setColleges(data.docs.map( (v) => 
                ({...v.data(), id: v.id, key: Math.floor(Math.random() * 88000) })
            ))
        }
        getColleges();
    }, [])

    const createRoute1 = (nav, schoolName) => {
        //const parentRoute = ReactDOM.findDOMNode() //App.getElementById("PARENT-ROUTE");
        const rt = <Route exact path={nav} element={<SchoolProfileProto SchoolName={schoolName}/>} />
        //console.log();
        //if (parentRoute.contains(rt) == false) {
        //parentRoute.appendChild(rt);
        return rt;
        //}
    }

    const createButton = (id, style, src, schoolName, nav, key) => {
        return <Button id={id} style ={style} src={src} alt={id+".png"} schoolName={schoolName}
                onClick = { () => {
                    createRoute1(nav, schoolName);
                    navigate(nav);
                    console.log(nav); } }
                key={key}/>
    }

    const loadAllColleges = () => {
        colleges.map( (v) => {
            return createButton(v.id, 
                {color: 'white', backgroundColor: 'transparent'}, 
                null, v._name, v.navigate, v.key+Math.floor(Math.random() * 88000)) //<div id={v.id}> {v._name} </div>
        })
    }
    
    //const [pageList, setPageList] = useState( () => loadAllColleges() )
    
    /* */
    const searchAlgo = (t) => {
        let listOfSchools = document.getElementById("List of schools")
        listOfSchools.map( (v) => {
            if (v.schoolName.includes(t)===false) { // if v.schoolName doesnt contain t remove t
                v.remove(); // remove
            }
        })
        // map( return <Button of school> {" \n"} )  
    }
    
    

    return <div>
        {/* EXAMPLE OF HOW THIS WILL LOOK. USE A DB AND AN ALGO TO LOAD THESE */}
        
        <h1>
            <SearchBar placeholder="Search for a college" /* onChange={() => searchAlgo(this.textContent)} */></SearchBar>
        </h1>
        <div id="List of schools">
            {/* () => loadAllColleges() USE THIS INSTEAD OF THAT \/ */}
            
            {colleges.map( (v) => {
                return createButton(v.id, {color: 'white', backgroundColor: 'transparent'}, null, v._name, v.navigate, Math.floor(Math.random() * 88000)) //<div id={v.id}> {v._name} </div>
                })}
            
            { /*
            <Button id="neu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                    src={neu} alt="Northeastern-University.png"
                    schoolName="Northeastern University" onClick={() => { navigate("/school-page-northeastern") }} />
            {" \n"}
            <Button id="bu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                    src={bu} alt="Boston-University.png" 
                    schoolName="Boston University" onClick={() => { navigate("*") }}/>
            */}
        </div>
    </div>
}

export default Schools;
