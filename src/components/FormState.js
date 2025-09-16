import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Full Name: ${formData.full_name}\nEmail: ${formData.email}\nPassword: ${formData.password}\nConfirm: ${formData.password_confirmation}`
    );
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" value={formData.full_name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
