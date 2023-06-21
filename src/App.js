import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import { SignUp } from "./pages/SignUpPage/SignUpPage.js";
import { Login } from "./pages/SignInPage/SignInPage.js";
import { Homepage } from './pages/Home/homepage.js';
import {AuthProvider} from './context/AuthContext.js';
import { PostSum } from './pages/Post/postSum.js';
import { PostPage } from './pages/Post/postId.js';
import { SearchSum } from './pages/Search/results.js';
import { UserPage } from './pages/User/UserPage.js';


function App () {



  return (
    <BrowserRouter>
      <AuthProvider>
      <GlobalStyle />
      
      <Routes> 
              <Route path="/" element= {<Login />} />
              <Route path="/signup" element= {<SignUp />} />
              <Route path="/home" element= {<Homepage />} />
              <Route path="/post" element= {<PostSum />} />
              <Route path="/post/:postId" element= {<PostPage />} />
              <Route path="/results" element= {<SearchSum />} />
              <Route path="/user" element= {<UserPage />} />



      </Routes>


      </AuthProvider>
    </BrowserRouter>


  )

}

export default App;
