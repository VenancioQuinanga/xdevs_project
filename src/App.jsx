import {React,useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

//layout components
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer'
import Message from './components/layout/Message';

//Pages components
import Home from './components/pages/Home';
import Register from './components/pages/Auth/Register'
import Login from './components/pages/Auth/Login';
import Profile from './components/pages/user/Profile';

//Hooks 
import useAuth from './hooks/useAuth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Container>
          <Message/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/login" element={ <Login/>} />
            <Route path="/profile" element={ <Profile/> } />
          </Routes>
        </Container>
        <Footer/>
      </BrowserRouter>
    </> 
  )
}

export default App
