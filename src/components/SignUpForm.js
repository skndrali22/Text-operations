import React from "react";
import "./SignUpForm.css";

export default function SignUpForm({userType}) {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <h2>Sign Up as {userType === "seller" ? "Seller" : "Buyer"}</h2>
        {/* Common form fields */}
        <div className="form-group">
          <label>Email:</label>
          <input type="text" name="email" />
        </div>
        {/* Conditionally render seller-specific fields */}
        {userType === "seller" && (
          <div className="form-group">
            <label>Shop Name:</label>
            <input type="text" name="shopName" />
          </div>
        )}
        {/* Conditionally render buyer-specific fields */}
        {userType === "buyer" && (
          <div className="form-group">
            <label>Shipping Address:</label>
            <input type="text" name="shippingAddress" />
          </div>
        )}
        {/* Other common form fields */}
        <button className="custom-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
