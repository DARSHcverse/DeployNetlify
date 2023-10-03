import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./routes/HomePage";
import SignUp from './signup';
import NavBar from "./navigation";
import LOGIN from "./routes/LoginPage";
import JOB from "./routes/FindJob"
import JobList from "./routes/joblist";

function App(){
    return(
    <Router>
      <NavBar/>
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='/' element={<LOGIN/>}/>
        <Route path='signup' element={<SignUp />} />
        <Route path='job' element={<JOB/>}/>
        <Route path='dev' element={<JobList/>}/>
      </Routes>
    </Router>
    )
}
export default App;