import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./ContextApi/AuthContext";
import DashboardLayout from "./Pages/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import UserDetails from "./Pages/User";
import UserForm from "./Components/UserForm";


function App() {
  return (
    <UserProvider>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<UserForm />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </DashboardLayout>
    </UserProvider>
  );
}

export default App;
