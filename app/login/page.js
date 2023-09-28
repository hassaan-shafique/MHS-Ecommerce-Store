"use client"
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router"; // Import the useRouter hook
import { useRouter } from 'next/navigation'
import Signup from "../Components/Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the useRouter hook
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the home page upon successful login
      router.push("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
   const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
     <div className="min-h-screen flex items-center justify-center">
      {!showSignup ? (
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className=" mb-2 text-center block text-gray-700 font-semibold">
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
          <label
            htmlFor="password"
            className=" mb-2 block text-gray-700 font-semibold"
          >
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
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <span className="ml-2"> Dont have an account?       </span>
       <button
          type="button"
          onClick={toggleSignup}
          className="mt-2  text-blue-500 hover:underline text-right"
        >
          Sign Up 
        </button>
      </form>
      ) : (
        
         <Signup/>
      )}
      </div>
  );
}

export default Login;
