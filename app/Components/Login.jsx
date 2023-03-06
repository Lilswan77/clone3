"use client";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorPopup, setErrorPupup] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorPupup("Please fill out these feilds");
    } else {
      console.log("Username:", username);
      console.log("Password:", password);
      // Replace console.log with your actual login logic
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-96 h-96 flex flex-col justify-center"
      >
        <label className="text-lg ml-5">Username:</label>
        <input
          placeholder="Enter your Username..."
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onFocus={() => setErrorPupup("")}
          className="rounded-lg px-3 py-2 m-5 outline-none border"
        />

        <label className="text-lg ml-5">Password:</label>
        <input
          placeholder="Enter your Password..."
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setErrorPupup("")}
          className="rounded-lg px-3 py-2 m-5 outline-none border"
        />

        {errorPopup && <div className="text-red-500 ml-5">{errorPopup}</div>}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
        >
          Login
        </button>
      </form>
    </div>
  );
}
