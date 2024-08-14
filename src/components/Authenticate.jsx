import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    console.log("Hello 👋");

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });
      const result = await response.json();
      setSuccessMessage(result.message);
      //setSuccessMessage(result.data);

      console.log(result);
    }
    catch (error) {
      setError(error.message);
    }
  }


  return (
    <div>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

      <button onClick={handleClick}> Authenticate token</button>
      </div>
      )
  }