import "./App.css";
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Comp/Navbar";
import Footer from './Footer.js'
 const App=()=>{
   return(
     <>
     <Navbar/>
     {/* To make the Component change based on the URL switch is used. */}
     <Switch>  
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/service" component={Service}/>
       {/* If any page is not found it is redirected to home page */}
       <Redirect to="/"></Redirect>
       
     </Switch>
     <Footer/>
     </>
   )
 }

export default App;
