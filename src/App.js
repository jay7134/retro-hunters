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
import Arcade from './Arcade';
function App() {
  return (
    <>
    <Router>
    <Fragment>
    <div className="App"> 
      <div className="page-content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/roadmap" element={<Roadmap/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/join-the-hunt" element={<><Header/><Join_the_hunt/></>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/arcade" element={<Arcade/>}/>
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
