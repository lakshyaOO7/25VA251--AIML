import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Name: ${name}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
