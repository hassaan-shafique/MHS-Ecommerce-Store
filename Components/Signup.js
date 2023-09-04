// components/Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect or perform other actions upon successful signup
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center">
  <form
    onSubmit={handleSignup}
    className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
  >
    <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600 font-semibold">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-600 font-semibold">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Sign Up
    </button>
  </form>
</div>

  );
}

export default Signup;
