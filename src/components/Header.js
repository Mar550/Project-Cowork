import React,{useState} from "react";
import './Header.css';
import './PopupLogin.css';
import PopupLogin from "./PopupLogin";


const Header = () => {

  const [buttonPopup, setButtonPopup] = useState(false);

    return (    
      <>
      <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center justify-content-between">
  
        <h1 className="logo"><a href="index.html">Cowork</a></h1>
  
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link  scrollto" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
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
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li  className="nav-link scrollto">
                    <input className="login" type="button" value="Login" onClick={() => setButtonPopup(true)}/>
                </li>
            <li className="nav-link scrollto">
                    <input className="signup" type="button" value="Sign Up"/>
           </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
      </div>
    </header>
    <div> 
      <PopupLogin trigger={buttonPopup} setTrigger ={setButtonPopup}/>              
    </div>
      </>
    )
}

export default Header;
