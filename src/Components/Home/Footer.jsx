import React from "react";
import img from "../../images/payment.png"

function Footer() {
  return (
    <>
    <footer>
      <div class="footer-bottom">
        <div class="container">
          <img
            src={img}
            alt="payment method"
            class="payment-img"
          />

          <p class="copyright">
            Copyright &copy; <a href="#">Fabric</a> all rights reserved. Developed By Prathmesh Jadhav.
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
