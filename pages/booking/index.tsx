import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Simple validation
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        setError(
          `Please fill in your ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        setLoading(false);
        return;
      }
    }

    try {
      const response = await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
    } catch (error: any) {
      setError(error?.response?.data?.message || "Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <div className="mb-4">
        <label>Card Number</label>
        <input
          name="cardNumber"
          type="text"
          value={formData.cardNumber}
          onChange={handleChange}
          className="border p-2 w-full mt-2 rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Expiration Date</label>
          <input
            name="expirationDate"
            type="text"
            value={formData.expirationDate}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            name="cvv"
            type="text"
            value={formData.cvv}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
      <div className="mb-4">
        <label>Street Address</label>
        <input
          name="billingAddress"
          type="text"
          value={formData.billingAddress}
          onChange={handleChange}
          className="border p-2 w-full mt-2 rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>City</label>
          <input
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
        <div>
          <label>State</label>
          <input
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Zip Code</label>
          <input
            name="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
        <div>
          <label>Country</label>
          <input
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 w-full mt-2 rounded-md"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </form>
  );
}
