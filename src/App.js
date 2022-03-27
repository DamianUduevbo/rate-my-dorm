import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Homepage from './pages/Homepage';
import Schools from './pages/Schools';
import AddSchool from './pages/AddSchool';
import * as Profiles from './pages/Profiles';
import ErrorPage from './pages/ErrorPage';

import { db } from './firebase-config';
import { collection, getDocs, } from 'firebase/firestore';


function App() {
  const randomKey = Math.floor(Math.random() * 88000)
  //const [routes, setRoutes] = useState([]);
  const [colleges, setColleges] = useState([]);
  //const [dorms, setDorms] = useState([]);
  const collegeCollection = collection(db, "schools")
  //const dormCollection = collection(db, collegeCollection.collection["school"])
  
  useEffect( () => { 
    const getColleges = async () => {
      const data = await getDocs(collegeCollection);
      setColleges(data.docs.map( (v) => ( // let dormCollection = collection(db, "schools/" +  v.id + "/dorms")
        {...v.data(), id: v.id})
      ))
    }
    getColleges();

  }, [] ); // DO NOT REMOVE []

  /*
  */
  const createRouteDormProfile = (pathName, dormName) => {
    console.log("Went to the call: " + pathName)
    return <Route exact path={ pathName }
            element={<Profiles.DormProfile dormName={dormName} />} 
            key={randomKey} />
  }

  const loopDorms = (dorms, schoolName) => {
    for (let i in dorms) {
      if ( dorms[i] !== undefined ) {
        let newDormName = dorms[i].dormName.replace(" ", "-")
        console.log("Sierra: " + newDormName )
        createRouteDormProfile("/"+newDormName, dorms[i].dormName)
      }
    }
    console.log("Loop Done")
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <nav>
              <Link to="/" type='button' style={Stylez.navBarLink} >Home</Link> {"       "}
              <Link to="/schools-list" type='button' style={Stylez.navBarLink} >Schools</Link> {"       "}
              <Link to="/add-school" type='button' style={Stylez.navBarLink} >Add Schools (dev)</Link> {"       "}
            </nav>
          </div>
          <Routes id="PARENT-ROUTE">
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/schools-list" element={<Schools/>} />
            <Route exact path="/add-school" element={<AddSchool/>} />

            {/* ROUTE TO ALL SCHOOLS */}
            {/* () => {loadAllRoutes("college"); console.log("Hi mate")}  */}
            {/* USE THIS \/ FOR NOW BECAUSE THAT /\ WONT WORK FROM SOME REASON (prolly need typescript)*/}
            {colleges.map( (v) => {
              console.log("Colleges.MAPPED")
              if (v.dorms !== undefined) {
                {v.dorms.map(n => {
                    //console.log(n)
                    console.log("v.dorms.MAPPED")
                    let newName = n.dormName.replace(" ", "-")
                    return <Route exact path={newName}
                      element={<Profiles.DormProfile dormName={newName} description={"fjgyhi"} src={null} />}
                      key={randomKey}
                      />
                  })
                }
              }
              return <Route exact path={v.navigate}
                element={<Profiles.SchoolProfile SchoolName={v._name} dormsList={v.dorms} parentNav={v.navigate} />}
                key={randomKey}
                 />
            })}

            {/* ROUTE TO ALL DORMS */}
            {/* () => loadAllRoutes("dorms")  UNCOMMENT TO RUN FIREBASE */}
            {colleges.map( (v) => {
              if (v.dorms !== undefined || v.dorms !== undefined) {
                //console.log("Delta1: " + v.dorms[i].dormName);
                //loopDorms(v.dorms, v._name);
              }
            })}
            <Route exact path="*" element={<ErrorPage/>} />
          </Routes>
        </header>
      </div>
    </Router>
    )
}

export const Stylez = {
  navBarLink: {
    color: '#FFF',
    background: '#FF4E32',
    textUnderlineOffset: 2
  }
}

export default App;
