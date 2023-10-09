import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./routes/HomePage";
import SignUp from './signup';
import NavBar from "./navigation";
import LOGIN from "./routes/LoginPage";
import JOB from "./routes/FindJob"
import JobList from "./routes/joblist";
import PaymentForm from "./routes/payment";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Chat from "./chatgpt";
import Chat2 from "./chtgptIMP";

function App(){
    const stripePromise = loadStripe('pk_test_51NxOlOLmGcseIlWj5DuA1epwhCqOs75tSzbu41Msj7nxZ45XgAhwX1LHIssSkT92mSoEOnPaOKLGXmtt3DOranfs00mT8Zcw1Y');
    return(
    <Router>
      <NavBar/>
      <Chat2/>
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='/' element={<LOGIN/>}/>
        <Route path='signup' element={<SignUp />} />
        <Route path='job' element={<JOB/>}/>
        <Route path='dev' element={<JobList/>}/>
        <Route path='pay' element={
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        } />
        <Route path='cht' element={<Chat/>}/>
      </Routes>
    </Router>
    )
}
export default App;