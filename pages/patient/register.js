import { useRouter } from "next/router";
import { useState } from "react";
export default function PatientRegister() {
  const router = useRouter();
  const initialFormData = {
    name: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    password: "",
  };
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      className="register"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.value);
      }}
    >
      <input
        type="text"
        className="register-input"
        onChange={handleChange}
        placeholder="Name"
        name="name"
        required
      />
      <input
        type="date"
        name="dob"
        onChange={handleChange}
        className="register-input"
        required
      />
      <input
        type="number"
        className="register-input"
        placeholder="Phone Number"
        onChange={handleChange}
        name="number"
        required
      />
      <input
        type="text-area"
        className="register-input"
        onChange={handleChange}
        placeholder="Address"
        name="address"
        required
      />

      <br />

      <div className="register-switch flex justify-center">
        <input
          type="radio"
          name="gender"
          value="F"
          onChange={handleChange}
          id="sex_f"
          className="register-switch-input"
          checked
        />
        <label for="sex_f" className="register-switch-label">
          Female
        </label>
        <input
          type="radio"
          name="gender"
          onChange={handleChange}
          value="M"
          id="sex_m"
          className="register-switch-input"
        />
        <label for="sex_m" className="register-switch-label">
          Male
        </label>
      </div>
      <input
        type="email"
        className="register-input"
        onChange={handleChange}
        placeholder="Email address"
        name="email"
        required
      />
      <input
        type="password"
        className="register-input"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        required
      />

      <input
        type="submit"
        value="Create Account"
        onSubmit={handleSubmit}
        className="register-button"
      />
    </form>
  );
}
