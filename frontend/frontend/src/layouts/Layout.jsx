import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/headercomp/Navbar';
import Home from '../pages/homepage/Home';
import Footer from '../components/footercomp/Footer'
import Login from '../pages/btnclickable/Login';
import Register from '../pages/btnclickable/Register';
import Submission from "../pages/itemclickable/Submission";
import Problems from '../pages/homepageclickable/Problems';
import Solutions from '../pages/homepageclickable/Solutions';
import CodeEditor from '../pages/problemsclickable/CodeEditor';
import SolutionDetails from '../pages/solutionsclickable/SolutionDetails';
import SubmissionDetails from '../pages/submissionclickable/SubmissionDetails';
function Layout() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/submission"  element={<Submission/>}/>
        <Route path="/problems"  element={<Problems/>}/>
        <Route path="/solutions"  element={<Solutions/>}/>
        <Route path="/solve/:tittle"  element={<CodeEditor/>}/>
        <Route path="/solutions/:id"  element={<SolutionDetails/>}/>
        <Route path="/submission-details" element={<SubmissionDetails />} />
      </Routes>
      <Footer/>
    
    </BrowserRouter>
  )
}

export default Layout
