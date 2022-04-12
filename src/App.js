import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Homepage from './pages/Homepage';
import Schools from './pages/Schools';
import AddSchool from './pages/AddSchool';
import * as Profiles from './pages/Profiles';
import ErrorPage from './pages/ErrorPage';
// import Button from './components/Button';
import { db } from './firebase-config';
import { collection, getDocs, } from 'firebase/firestore';
import { Post } from './components/Post';
import * as whtmilk from './components/images/white-hall-milk1.jpeg'


function App() {
  const randomKey = () => {return Math.floor(Math.random() * 88000)}

  const [colleges, setColleges] = useState([]);
  const collegeCollection = collection(db, "schools")

  useEffect(() => {
    const getColleges = async () => {

      const data = await getDocs(collegeCollection);

      setColleges(data.docs.map((v) => (
        { ...v.data(), id: v.id })))
    }
    getColleges();
  }, []); // DO NOT REMOVE []

  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <nav style = {{position: "fixed", top: 10,  }} >
              <Link to="/" type='button' style={Stylez.navBarLink} >Home</Link> {"       "}
              <Link to="/schools-list" type='button' style={Stylez.navBarLink} >Schools</Link> {"       "}
              <Link to="/add-school" type='button' style={Stylez.navBarLink} >Add Schools (dev)</Link> {"       "}
              <Link to="/demo-posts" type='button' style={Stylez.navBarLink} >Post (dev)</Link> {"       "}
            </nav>
          <div style={{background: "Grey"}}></div>
          <Routes id="PARENT-ROUTE">
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/schools-list" element={<Schools />} />
            <Route exact path="/add-school" element={<AddSchool />} />
            <Route exact path="/demo-posts" element={<Post src={whtmilk} tags={"#Freshman \n #sorry"}  />} />

            {/* ROUTE TO ALL SCHOOLS */}
            {colleges.map((v) => {
              console.log("Colleges.MAPPED")
              let ovrRating = 0;
              let dormRoutes = [];

              if (v.dorms !== undefined) {
                dormRoutes = v.dorms.map(n => {

                  let newName = v.navigate + "/" + n.dormName.replace(" ", "-")
                  ovrRating = ovrRating + n.rating

                  if (n.desc === undefined) {
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

/*
*/
