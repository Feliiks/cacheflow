import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export default function SignInPage() {
  const [emailInput, setEmailInput] = React.useState("");
  const [passInput, setPassInput] = React.useState("");

  const handleClick = (event) => {
    event.preventDefault();
    console.log("emailInput: ", emailInput, "passInput: ", passInput);

    // do what you want with your form data
    fetch("");
  };

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassInput(event.target.value);
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in</h2>
      <form action="/home">
        <p>
          <label>Email address</label>
          <br />
          <input
            type="text"
            name="first_name"
            onChange={handleEmailChange}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            name="password"
            onChange={handlePassChange}
            required
          />
        </p>
        <p>
          <button onClick={handleClick} id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time?<Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
