import React from 'react';

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import { SignUp } from "./pages/SignUpPage/SignUpPage.js";
import { Login } from "./pages/SignInPage/SignInPage.js";
import { Homepage } from './pages/Home/homepage.js';
import UserContext from './context/UserContext.js';
import { PostSum } from './pages/Post/postSum.js';
import { PostPage } from './pages/Post/postId.js';


function App () {
  const [logado, setLogado] = useState("");



  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider
        value={{
					logado,
					setLogado,
        }}
      />
      <Routes> 
              <Route path="/" element= {<Login />} />
              <Route path="/signup" element= {<SignUp />} />
              <Route path="/home" element= {<Homepage />} />
              <Route path="/post" element= {<PostSum />} />
              <Route path="/post/:postId" element= {<PostPage />} />


              {/* <Route path="/user" element= {<Homepage />} />
              <Route path="/results" element= {<Homepage />} /> */}



      </Routes>



    </BrowserRouter>


  )

}

export default App;
