import { Link } from "react-router-dom";
import { Menu, X, Users, PlusCircle, Home } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-200 ease-in-out
          bg-gray-900 text-white w-64 z-40 p-4 space-y-6
          md:translate-x-0`}
      >
        <h1 className="text-xl font-bold">User Dashboard</h1>

        <nav className="flex flex-col space-y-2 mt-6">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <Home size={18} /> Dashboard
          </Link>
          <Link
            to="/create"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <PlusCircle size={18} /> Create User
          </Link>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <Users size={18} /> GitHub
          </a>
        </nav>
      </aside>

      {/* Spacer for sidebar (desktop only) */}
      <div className="hidden md:block w-64" />
    </>
  );
};

export default Sidebar;
