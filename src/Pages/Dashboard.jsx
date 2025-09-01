import { useContext, useState } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import UserData from "../Components/UserData";
import UserForm from "../Components/UserForm";

const Dashboard = () => {
  const { users, search, setSearch } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle form submission success → hide form
  const handleFormSubmit = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

      {/* Search + Add Button Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/3 p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={showForm} // disable search when form is open
        />

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "Add User"}
        </button>
      </div>

      {/* Show Users or Form */}
      {!showForm ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map(user => (
            <UserData key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="p-4 border rounded bg-white shadow">
          
          {/* Pass callback to close form after submit */}
          <UserForm onSubmitSuccess={handleFormSubmit} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
