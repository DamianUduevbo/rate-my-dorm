import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Schools from './pages/Schools';
import AddSchool from './pages/AddSchool';
import SchoolProfileProto from './pages/SchoolProfile';
import ErrorPage from './pages/ErrorPage';
import * as DormProfs from './pages/DormProfile';

/* */
import { db } from './firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs, } from 'firebase/firestore';


function App() {
  //const [routes, setRoutes] = useState([]);
  let randomKey = Math.floor(Math.random() * 88000)
  const [colleges, setColleges] = useState([]);
  //const [dorms, setDorms] = useState([]);
  const collegeCollection = collection(db, "schools")
  //const dormCollection = collection(db, "dorms")
  
  useEffect( () => { 
    const getColleges = async () => {
      const data = await getDocs(collegeCollection);
      
      setColleges(data.docs.map( (v) => ( // let dormCollection = collection(db, "schools/" +  v.id + "/dorms")
        {...v.data(), id: v.id})
      ))
    }
    getColleges();
  }, [] ); // DO NOT REMOVE []

  const createRoute = (props) => {
    console.log("Went to the call")
    return <Route exact path={props.nav} element={props.htmlStuff} key={props.key+randomKey} />
  }
  const loopDorms = (dorms) => {
    for (let i in dorms) {
      console.log("Sierra")
      return (<Route exact path={dorms[i].id} 
        element={<DormProfs.DormProfile dormName={dorms[i].dormName} />} 
        key={randomKey} />)
    }
  }

  const loadAllRoutes = (tipe) => {
    if (tipe === "colleges") {
      colleges.map( (v) => {
        console.log(v.navigate)
        return createRoute(v.navigate, <SchoolProfileProto SchoolName={v._name}/>, randomKey) // OR return <Route exact path={v.navigate} element={<SchoolProfileProto SchoolName={v._name}/>} />
      })
    }
    if (tipe === "dorms") {
      colleges.map( (v) => {
        console.log(v.navigate)
        loopDorms(v.dorms);
        //return createRoute(v.navigate, <DormProfileProto />) // OR return <Route exact path={v.navigate} element={} />
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
          <Routes id="PARENT-ROUTE">
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/schools-list" element={<Schools/>} />
            <Route exact path="/add-school" element={<AddSchool/>} />

            {/* ROUTE TO ALL SCHOOLS */}
            {/* () => {loadAllRoutes("college"); console.log("Hi mate")}  */}
            {/* USE THIS \/ FOR NOW BECAUSE THAT /\ WONT WORK FROM SOME REASON (prolly need typescript)*/}
            {colleges.map( (v) => {
              return(<Route exact path={v.navigate}
                element={<SchoolProfileProto SchoolName={v._name}/>}
                key={randomKey}
                 />)
              // createRoute(v.navigate, <SchoolProfileProto SchoolName={v._name}/>, randomKey);
            })}

            {/* ROUTE TO ALL DORMS */}
            {/* () => loadAllRoutes("dorms")  UNCOMMENT TO RUN FIREBASE */}
            {colleges.map( (v) => {
              console.log("Delta")
              loopDorms(v.dorms);
              //return createRoute(v.navigate, <DormProfileProto />) // OR return <Route exact path={v.navigate} element={} />
            })}
            <Route exact path="/dorm-page-Northeastern-WHT" element={<DormProfs.DormProfileProto />} />
            <Route exact path="*" element={<ErrorPage/>} />
          </Routes>
        </header>
      </div>
    </Router>
    )
}

const Stylez = {
  navBarLink: {
    color: '#FFF',
    background: '#FF4E32',
    textUnderlineOffset: 2
  }
}

export default App;
