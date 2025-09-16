import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Full Name: ${fullNameRef.current.value}\nEmail: ${emailRef.current.value}\nPassword: ${passwordRef.current.value}\nConfirm: ${confirmPasswordRef.current.value}`
    );
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" ref={fullNameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" ref={confirmPasswordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
