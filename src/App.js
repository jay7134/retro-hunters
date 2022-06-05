import logo from './logo.svg';
import Header from './Header';
import Roadmap from './Roadmap';
import About from './About';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from './Account';
import Join_the_hunt from './Join-the-hunt';
import Home from './Home';
import 'animate.css';
import Task from './Task';
function App() {
  return (
    <>
    <Router>
    <Fragment>
    <div className="App">
    <Routes>
        <Route path="/" element={<Header/>}/>
    </Routes>    
      <div className="page-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/roadmap" element={<Roadmap/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/join-the-hunt" element={<Join_the_hunt/>}/>
        <Route path="/task" element={<Task/>}/>
      </Routes>
      
      </div>
      <footer className="footer-wrapper bg-gray sec-pad">
      </footer> 
    </div>
    </Fragment>
    </Router>
    </>
  );
}

export default App;
