import React from "react";

function Footer() {

  return (
    <footer className="brian-footer">
      <a href="/" className="footer-logo-frame postings" id="home">
        <span className="footer-logo-box">
          <img src="https://targaryenstore.s3.us-east-2.amazonaws.com/Targaryen-shield.png"></img>
          <div className="footer-logo-inner">
            <h3>Targaryen</h3>
          </div>
        </span>
      </a>
    </footer>
  )
}

export default Footer;