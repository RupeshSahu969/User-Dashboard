import { useState, useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

const UserForm = ({ onSubmitSuccess }) => {
  const { addUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company") {
      setForm({ ...form, company: { name: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", email: "", phone: "", company: { name: "" } });

    if (onSubmitSuccess) onSubmitSuccess(); // Close form after submit
  };

  return (
  <div className="mt-20">
    <h2 className="text-xl font-semibold mb-2">Create New User</h2>
      <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-sm"
    >
      {/* First row: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Second row: Phone + Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="company"
          value={form.company.name}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Save User
        </button>
      </div>
    </form>
  </div>
  );
};

export default UserForm;
