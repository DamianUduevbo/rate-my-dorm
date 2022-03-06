import React from 'react';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import {Route, useNavigate} from 'react-router-dom';
import * as Profiles from './Profiles';

import { db } from '../firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { list } from 'firebase/storage';
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

    const createRoute1 = (nav, schoolName, dormName) => {
        //const parentRoute = ReactDOM.findDOMNode() //App.getElementById("PARENT-ROUTE");
        const rt = <Route exact path={nav} 
                        element={<Profiles.SchoolProfile SchoolName={schoolName} dormName={dormName} />
                        } />
        //console.log();
        //if (parentRoute.contains(rt) == false) {
        //parentRoute.appendChild(rt);
        return rt;
        //}
    }

    const createButton = (id, style, src, schoolName, nav, key) => {
        return <Button id={id} style ={style} src={src} alt={id+".png"} schoolName={schoolName} tag="school-on-schools-page"
                onClick = { () => {
                    createRoute1(nav, schoolName);
                    navigate(nav);
                    console.log(nav); } }
                key={key} />
    }
    
    //const [pageList, setPageList] = useState( () => loadAllColleges() )
    
    /* */
    const searchAlgo = () => {
        let listOfSchools = document.getElementById("List of schools");
        listOfSchools = Array.from(listOfSchools)
        let searchBar = document.getElementById("search-bar");
        //console.log(searchBar.value)

        listOfSchools.map( (v) => {
            if (v.schoolName.includes(searchBar.value)===false) {
                console.log(searchBar.value)
                v.remove(); // remove
            }
            else {
                console.log("else")
            }
          }
        )
    }
    
    

    return <div>
        {/* EXAMPLE OF HOW THIS WILL LOOK. USE A DB AND AN ALGO TO LOAD THESE */}
        
        <h1>
            <SearchBar id="search-bar" placeholder="Search for a college"
                onChange={ () => { } } />
        </h1>
        <div id="List of schools">
            {/* () => loadAllColleges() USE THIS INSTEAD OF THAT \/ */}
            
            {colleges.map( (v) => {
                console.log("Lima")
                return createButton( v.id, {color: 'white', backgroundColor: 'transparent'},
                                null, v._name, v.navigate, Math.floor(Math.random() * 88000))
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
