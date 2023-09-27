"use client"
import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "CashOnDelivery",
    cardNumber: "",
    cvv: "",
    issueDate: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
  };

  const renderPaymentDetails = () => {
    if (formData.paymentMethod === "DebitCard") {
      return (
        <div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-600">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-600">
              CVS:
            </label>
            <input
              type="text"
              id="cvs"
              name="cvs"
              value={formData.cvs}
              onChange={handleChange}
              required
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="issueDate" className="block text-gray-600">
              Issue Date:
            </label>
            <input
              type="text"
              id="issueDate"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              required
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-gray-600">
              Expiry Date:
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          phoneNumber
        </label>
        <input
          type="text"
          id="Phone no "
          name="Phone no"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Address
        </label>
        <input
          type="text"
          id="Address"
          name="Address"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* ... Other input fields (email, phoneNumber, address) ... */}
      <div className="mb-4">
        <label htmlFor="paymentMethod" className="block text-gray-600">
          Payment Method:
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        >
          <option value="CashOnDelivery">Cash on Delivery</option>
          
          <option value="DebitCard">Debit Card</option>
        </select>
      </div>
      {renderPaymentDetails()}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default OrderForm;
