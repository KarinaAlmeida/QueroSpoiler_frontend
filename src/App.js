import React from 'react';

// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import { SignUp } from "./pages/SignUpPage/SignUpPage.js";
import { Login } from "./pages/SignInPage/SignInPage.js";
import { Homepage } from './pages/Home/homepage.js';


function App () {


  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
              <Route path="/" element= {<Login />} />
              <Route path="/signup" element= {<SignUp />} />
              <Route path="/home" element= {<Homepage />} />

      </Routes>



    </BrowserRouter>


  )

}

export default App;
