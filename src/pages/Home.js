import React from "react";
import styled from 'styled-components';
import './Home.css';
import {FaSearch} from 'react-icons/fa';


const Home = () => {
    return (
        <>
  <section id="hero">
    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{backgroundImage:`url(assets/img/slide/slide-1.jpg)`}}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animated fadeInDown">Welcome to <span>Hidayah</span></h2>
                <div class="col-lg-6">
                  <form action="" method="post">
                    <div className="forma">
                  <input className="citysearch" type="input" placeholder="Select a city" name="city"/> <FaSearch className="icon"/>
                  </div>
                  </form>
                </div>
              <div className="seeall">
              <a href="#about" className="btn-get-started animated fadeInUp scrollto">See All</a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage:`url(assets/img/slide/slide-2.jpg)`}}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
              <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" className="btn-get-started animated fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

            </div>
        </section>
        </>
    )
}

const Wrapper = styled.div`


`;

export default Home;