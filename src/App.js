import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Schools from './pages/Schools';
import AddSchool from './pages/AddSchool';
import SchoolProfile_proto from './pages/SchoolProfile-proto';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to="/" type='button' style={Stylez.navBarLink} >Home</Link> {"       "}
            <Link to="/schools-list" type='button' style={Stylez.navBarLink} >Schools</Link> {"       "}
            <Link to="/add-school" type='button' style={Stylez.navBarLink} >Add Schools (dev)</Link> {"       "}
            <Link to="/school-page" type='button' style={Stylez.navBarLink} >School Profile Page (dev)</Link>
          </div>
          
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/schools-list" element={<Schools/>} />
            <Route exact path="/add-school" element={<AddSchool/>} />
            <Route exact path="/school-page" element={<SchoolProfile_proto SchoolName={"Northeastern Univeristy"}/>} />
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
