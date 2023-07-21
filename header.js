import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch,Link,Redirect } from 'react-router-dom';

import login from '../login';
import web3 from "../web3";
import InsuranceRecord from "../InsuranceRecord";


class Header extends Component {


    
    

    render() {
      var userstatus = sessionStorage.getItem('status');
    
        return (


<header id="header" class="fixed-top d-flex align-items-center header-opaque py-0">
<div class="container d-flex align-items-center justify-content-between">

  <div class="logo">
    <h1><a href="index.html">MedBloc</a></h1>
    
     
  </div>

  <nav id="navbar" class="navbar navbar-dark">
    <ul>
      <li><a class="nav-link scrollto" href="./">Home</a></li>
      <li><a class="nav-link scrollto" href="#about">About</a></li>
      <li><a class="nav-link scrollto" href="#services">Services</a></li>      
      {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li> */}
      <li><a class="nav-link scrollto active" href="./login">{userstatus}</a></li>
    </ul>
    <i class="bi bi-list mobile-nav-toggle"></i>
  </nav>

</div>
</header>

)

    }

}

export default Header;