import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Header from './Header';
import FileSelect from './FileSelect';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header></Header>
     <Routes>
     <Route path="/signup" element={<SignUp></SignUp>}></Route>
     <Route path="/" element={<LogIn></LogIn>}></Route>
     <Route path="convert-file" element={<FileSelect></FileSelect>}></Route>

     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
