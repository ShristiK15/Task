import React, { useState } from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Refer And Earn</h1>
      <div>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const[showModal, setShowModal]=useState(false);
  const closeModal=()=>
    {
        return setShowModal(false);
    }
    const MyModel = () =>
      {
          return(
              <>
              <div className="form-wrapper"></div>
              <div class="form-container">
              <button class="close-button" onClick={closeModal}>&times;</button>
              <h2>Referral Form</h2>
              <form id="referralForm">
              <label for="referralCode">Referral Code:</label>
            <input type="text" id="referralCode" name="referralCode" required/>
            
            <label for="refereeName">Referee Name:</label>
            <input type="text" id="refereeName" name="refereeName" required/>
            
            <label for="refererName">Referer Name:</label>
            <input type="text" id="refererName" name="refererName" required/>
            
            <label for="email">Referer Email:</label>
            <input type="email" id="email" name="email" required/>
            <div class="button-group">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
              </form>
              </div>
              </>
          );
      }
  return (
    <div>
    <div className="hero-section">
        <div className="hero-section-left">
      <h2 className="hero-title">Refer and Earn ₹500</h2>
      <p className="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis consectetur eaque itaque perspiciatis minus soluta quas optio. Beatae reprehenderit nobis fugit illum explicabo corporis corrupti ratione sequi eos officia cum dignissimos velit odit omnis rem eveniet nulla saepe sed culpa, ad, quas consectetur non. Natus cum laborum hic odit!
      </p>
      <div className="button-group">
        <button className="learn-more-btn">Learn More</button>
        <button className="start-earning-btn" onClick={()=> setShowModal(true)}>Start Earning</button>
      </div>
    </div>
    <div className="hero-section-right">
        <img src="/images/main.png" alt="" />
    </div>
    </div>
    <div className="popUpForm">
    {showModal && <MyModel closeModal={closeModal}/>}
    </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2 className="section-title">How it works</h2>
      <div className="steps-container">
        <div className="step">
          <img src="/images/signup.png" alt="Signup" className="step-icon" />
          <h3>Login/ Sign up</h3>
          <p>Login/ Sign up and get your unique code and referral link on 'Refer and Earn' page</p>
        </div>
        <div className="step">
          <img src="/images/share-code.png" alt="Share Code" className="step-icon" />
          <h3>Share Your Code</h3>
          <p>Refer a friend/family to our website with the help of a code</p>
        </div>
        <div className="step">
          <img src="/images/shopping.png" alt="Shopping" className="step-icon" />
          <h3>Referee Shops</h3>
          <p>They will receive INR 350 in their Shoppre wallet on sign up</p>
        </div>
        <div className="step">
          <img src="/images/shopping.png" alt="Reward" className="step-icon" />
          <h3>Get Rewarded!</h3>
          <p>Finally, have them make a purchase - and you receive a discount of INR 500!</p>
        </div>
      </div>
    </div>
  );
};
const Disclamer = () => {
    return (
        <footer>
        <p><b>Disclamer:  </b>All rights reserved</p>
      </footer>
    );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Disclamer />
    </div>
  );
};

export default App;
