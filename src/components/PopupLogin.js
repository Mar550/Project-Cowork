import React,{useState} from "react";
import './PopupLogin.css';
import {FaGooglePlus} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {AiFillCloseSquare} from 'react-icons/ai';


const PopupLogin = (props) => {

    const [trigger, setTrigger] = useState(false);

    return (props.trigger) ? (
        <>
        <section className="inner-page">
                    <div className="container-fluid">
                    <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form className="loginform">
                <AiFillCloseSquare className="closeicon" onClick={() => props.setTrigger(false)}/>
                <h3>Login </h3>

                <label for="username">Username</label>
                <input className="logininput" type="text" placeholder="Email or Phone" id="username"/>

                <label for="password">Password</label>
                <input className="logininput" type="password" placeholder="Password" id="password"/>

                <button>Log In</button>
                <div class="social">
                <div class="go"> <FaGooglePlus/> </div>
                <div class="gi"> <BsGithub/> </div>
                <div class="tw"> <AiFillTwitterCircle/> </div>
                <div class="fb"> <FaFacebook/> </div>
                </div>
            </form>
            </div>

        </section> 
        </>
    ) : "";
}



export default PopupLogin;
