
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState ("");
  
  const [phonenumber, setPhoneNumber]= useState("");


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);

    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
   <div className="min-h-screen width={50%} flex items-center justify-center">
  <form
    onSubmit={handleSignup}
    className="w-full max-w-md p-6 bg-white
    text-black rounded-lg shadow-md"
  >
    <h2 className="text-2xl text-black font-semibold text-center mb-6">SignUp Form</h2>
    <div className="mb-4">
      <label htmlFor="email" className="space-y-1 block text-black  font-semibold">
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
   <div className="mb-6">
  <p className="block text-gray-600 font-semibold">Gender</p>
  <div>
    <input
      type="radio"
      id="male"
      name="gender"
      value="male"
      className="mr-1"
      checked={gender === "male"}
      onChange={(e) => setGender(e.target.value)}
      required
    />
     <label  className="text-black"htmlFor="male">Male</label>
  </div>
 
  <div>
    <input
      type="radio"
      id="female"
      name="gender"
      value="female"
      className="mr-1"
      checked={gender === "female"}
      onChange={(e) => setGender(e.target.value)}
      required
    />
    <label  className="text-black"htmlFor="female">Female</label>
  </div>
</div>
    {/* <div className="mb-6">
      <label htmlFor="age" className="block text-gray-600 font-semibold">
        Age
      </label>
      <input
        type="age"
        id="age"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
    </div> */}

    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-600 font-semibold">
        Phone No
      </label>
      <input
        type="phone number"
        id="phone number"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
        placeholder="phone number"
        value={phonenumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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

