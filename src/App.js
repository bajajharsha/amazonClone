import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from "./components/StateProvider"
// import { auth } from "../../Login/firebase"

function App() {
  const [{ basket }, dispatch] = useStateValue();

  // useEffect
  // piece of code which runs based on a given condition
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChange((authUser) => {
  //     if (authUser) {
  //       // user is logged in
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser
  //       })

  //     } else {
  //       // user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null
  //       })
  //     }
  //   })
  //   return () => {
  //     // any cleanup operations go here
  //     unsubscribe();
  //   }
  // }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<><Login /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
