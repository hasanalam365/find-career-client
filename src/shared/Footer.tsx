import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <p>
            FindeHere Company Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>

          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Term & policy</a>
        
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
