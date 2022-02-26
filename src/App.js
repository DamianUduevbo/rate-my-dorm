import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Schools from './pages/Schools';
import AddSchool from './pages/AddSchool';
import SchoolProfileProto from './pages/SchoolProfile';
import ErrorPage from './pages/ErrorPage';
import DormProfileProto from './pages/DormProfile';

/* */
import { db } from './firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';


function App() {

  const [colleges, setColleges] = useState([]);
  const [dorms, setDorms] = useState([]);
  const collegeCollection = collection(db, "schools")
  
  useEffect( () => {
    const getColleges = async () => {
      const data = await getDocs(collegeCollection);
      setColleges(data.docs.map( (v) => ( // let dormCollection = collection(db, "schools/" +  v.id + "/dorms")
        {...v.data(), id: v.id} )))
    }
    getColleges();
  }, []); // DO NOT REMOVE []

  const createRoute = (nav, htmlStuff) => {
    return <Route exact path={nav} element={htmlStuff} />
  }

  const loadAllRoutes = (tipe) => {
    if (tipe === "colleges") {
      colleges.map( (v) => {
        return createRoute(v.navigate, <SchoolProfileProto SchoolName={v._name}/>) // OR return <Route exact path={v.navigate} element={<SchoolProfileProto SchoolName={v._name}/>} />
      })
    }
    if (tipe === "dorms") {
      colleges.map( (v) => {
        return createRoute(v.navigate, <DormProfileProto />) // OR return <Route exact path={v.navigate} element={} />
      })
    }
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
              {/*
              <Link to="/school-page-northeastern" type='button' style={Stylez.navBarLink} >School Profile Page (dev, {"\n example: NEU"})</Link>
              */}
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/schools-list" element={<Schools/>} />
            <Route exact path="/add-school" element={<AddSchool/>} />

            {/* ROUTE TO ALL SCHOOLS */}
            { /*  () => loadAllRoutes("college") */} {/* UNCOMMENT TO RUN FIREBASE 
            <Route exact path="/school-page-northeastern" element={<SchoolProfileProto SchoolName={"Northeastern Univeristy"}/>} />
            */}

            {/* ROUTE TO ALL DORMS */}
            { /* () => loadAllRoutes("dorms") */} {/* UNCOMMENT TO RUN FIREBASE */}
            <Route exact path="/dorm-page-Northeastern-WHT" element={<DormProfileProto />} />
            <Route exact path="*" element={<ErrorPage/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

const Stylez = {
  navBarLink: {
    color: '#FFF',
    background: '#FF4E32',
    textUnderlineOffset: 2
  }
}

export default App;
