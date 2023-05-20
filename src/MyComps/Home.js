import React from "react";
import myImg from "../MyComps/mm.png"
function MyHome()
{
    return(
<section className="section hero" id="home" aria-label="hero">
<div className="container">

  <div className="hero-content">

    <p className="hero-subtitle">ABCD Marketing Agency</p>

    <h1 className="h2 hero-title">Your Marketing, Our Responsibility</h1>

    <p className="hero-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et
      dolore magna
      aliqua.
    </p>

    <a href="#" className="btn btn-primary">Get Started</a>

  </div>

  <figure className="hero-banner">
    <img src={myImg} width="720" height="673" alt="hero-banner" className="w-100"></img>
  </figure>

</div>
</section>

    
);
}
export default MyHome;