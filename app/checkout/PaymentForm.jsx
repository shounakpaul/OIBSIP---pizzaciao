import React from "react";
import "./styles.css";
import Image from "next/image";
import RazorpayLogo from "@/public/cart/razorpay_logo.png";

function PaymentForm() {
  return (
    <div>
      <div className="app-container">
        <div className="top-box">
          <p>
            <span className="left-icon">
              <Image
                src={RazorpayLogo}
                alt="Razorpay Logo"
                width="80"
                height="40"
              />
            </span>
          </p>
        </div>

        <div className="middle-box">
          <h1>
            300.00<span>INR</span>
          </h1>
          <p>Pay To PizzaCiao Ltd.</p>
        </div>

        <div className="bottom-box">
          <button type="button" className="payment-option-btn">
            Pay with Credit or Debit Card
          </button>
        </div>

        <form method="POST" action="insert.php">
          <div className="card-details">
            <div className="name-field-group">
              <label>Card Holder Name</label>
              <br />
              <input
                type="text"
                name="cardholdername"
                className="name-field"
                required="required"
                placeholder="Full Name"
              />
            </div>

            <div className="card-num-field-group">
              <label>Registed Mobile Number for OTP</label>
              <br />
              <input
                type="text"
                name="mobilenumber"
                className="card-num-field"
                required="required"
                pattern="[0-9]*"
                placeholder="Registed Number for OTP"
              />
            </div>

            <div className="card-num-field-group">
              <label>Card Number</label>
              <br />
              <input
                type="text"
                name="cardnumber"
                className="card-num-field"
                required="required"
                pattern="[0-9]*"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>

            <div className="date-field-group">
              <label>Expiry Date</label>
              <br />
              <input
                type="text"
                name="mm"
                className="date-field"
                required="required"
                pattern="[0-9]*"
                placeholder="mm"
              />
              <input
                type="text"
                name="yyyy"
                className="date-field"
                required="required"
                pattern="[0-9]*"
                placeholder="yyyy"
              />
            </div>

            <div className="cvc-field-group">
              <label>CVV</label>
              <br />
              <input
                type="password"
                name="cvv"
                className="cvc-field"
                required="required"
                pattern="[0-9]*"
                placeholder="xxx"
              />
            </div>

            <button type="button" className="pay-btn">
              Pay Now
            </button>
            {/* <input type="submit" className="pay-btn" value="Pay Now" /> */}
          </div>
        </form>
        <div className="falock">
          <p>
            <i style={{ fontSize: "12px" }} className="fa">
              &#xf023;
            </i>{" "}
            This is a secure 128-bit SSL Encrypted payment.
          </p>
        </div>

        <footer className="footer">
          <p>
            &copy; 2023 PizzaCiao Ltd. &middot; <br />
            <a href="https://www.ajiofiber.com">Terms of Service</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default PaymentForm;
