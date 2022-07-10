import React from "react";
import {ImLocation} from 'react-icons/im';
import './Space.css';
import img1 from '../assets/aa1.jpeg';
import img2 from '../assets/aa2.jpeg';
import img3 from '../assets/aa3.jpeg';
import img4 from '../assets/aa4.jpeg';
import img5 from '../assets/aa5.jpeg';
import { Carousel } from "react-bootstrap";

const Space = () => {
    return (
    <>
    <section id="breadcrumbs" className="breadcrumbs">
    <div className="container-fluid">

        <div className="columns"> 
        <div className="columna">
        <h1> Workspace name </h1>

        <div className="city">
        <ImLocation className="icon"/>
        <h2> City </h2>
        </div>

        <div className="btn-choice">
            <div className="btns">
            <button className="option"> Photos </button>
            <button className="option"> Location </button>
            </div>
            
        <Carousel id="carousel-cmp">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        
        <div>
            <h3> Accomodations </h3>
        </div>

        <div>
            <h3> Services </h3>
        </div>

        </div>

        <div className="columnb">
            <div id="features">
                <h4> Main Specifications </h4>
                <ul>
                <li> Surface </li>
                <li> Price </li>
                <li> Opening Schedule </li>
                </ul>
            </div>
            <div id="types">
                <h4> Space Features </h4>
                <ul>
                <li> Coworking space </li>
                <li> Private desk </li>
                <li> Virtual desk </li>
                <li> Conforence room desk </li>
                </ul>
            </div>
        </div>

      </div>
    </div>
    </section>
    <section className="inner-page">
      <div className="container-fluid">
        <h3> Other Workspaces </h3>
      </div>
      <p> Cards </p>
    </section>
    </>

    )
}

export default Space;

 