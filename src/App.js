import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Homepage from './pages/Homepage';
import Schools from './pages/Schools';
import AddSchool from './pages/AddSchool';
import * as Profiles from './pages/Profiles';
import ErrorPage from './pages/ErrorPage';
import Button from './components/Button';
import { db } from './firebase-config';
import { collection, getDocs, } from 'firebase/firestore';
import { Post } from './components/Post';

import * as imgs from './components/images/white-hall.png'


function App() {
  const randomKey = () => {return Math.floor(Math.random() * 88000)}

  const [colleges, setColleges] = useState([]);
  const collegeCollection = collection(db, "schools")

  useEffect(() => {
    const getColleges = async () => {
      const data = await getDocs(collegeCollection);
      setColleges(data.docs.map((v) => (
        { ...v.data(), id: v.id })
      ))
    }
    getColleges();

  }, []); // DO NOT REMOVE []

  /*
  */
  const createRouteDormProfile = (pathName, dormName) => {
    console.log("Went to the call: " + pathName)
    return <Route exact path={pathName}
      element={<Profiles.DormProfile dormName={dormName} />}
      key={randomKey} />
  }

  const loopDorms = (dorms, schoolName) => {
    for (let i in dorms) {
      if (dorms[i] !== undefined) {
        let newDormName = dorms[i].dormName.replace(" ", "-")
        console.log("Sierra: " + newDormName)
        createRouteDormProfile("/" + newDormName, dorms[i].dormName)
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
              <Link to="/demo-posts" type='button' style={Stylez.navBarLink} >Post (dev)</Link> {"       "}

            </nav>
          </div>
          <Routes id="PARENT-ROUTE">
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/schools-list" element={<Schools />} />
            <Route exact path="/add-school" element={<AddSchool />} />
            <Route exact path="/demo-posts" element={<Post src={imgs} tags={"Freshman \n sorry"}  />} />

            {/* ROUTE TO ALL SCHOOLS */}
            {colleges.map((v) => {
              console.log("Colleges.MAPPED")
              let ovrRating = 0;
              let dormRoutes = [];

              if (v.dorms !== undefined) {
                dormRoutes = v.dorms.map(n => {

                  let newName = v.navigate + "/" + n.dormName.replace(" ", "-")
                  ovrRating = ovrRating + n.rating

                  if (n.desc == undefined) {
                    console.log("undef: no desc")
                  }
                  console.log("newName " + newName)
                  return <Route path={newName}
                    element={<Profiles.DormProfile
                      dormName={n.dormName} description={n.desc}
                      src={null} key={randomKey}/>
                    }
                    key={randomKey}
                  />

                })
              }

              return <>
                {dormRoutes}
                <Route exact path={v.navigate}
                  element={<Profiles.SchoolProfile SchoolName={v._name} dormsList={v.dorms} overallRating={ovrRating} parentNav={v.navigate} key={randomKey}/>}
                  key={randomKey} />
              </>
            })}

            {/* ROUTE TO ALL DORMS */}
            {colleges.map((v) => {
              if (v.dorms !== undefined || v.dorms !== undefined) {
                //console.log("Delta1: " + v.dorms[i].dormName);
                //loopDorms(v.dorms, v._name);
              }
            })}
            <Route exact path="*" element={<ErrorPage />} />
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
