import { Menu } from "lucide-react";

const Header = ({ setIsOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 md:left-64 bg-white shadow px-4 py-3 flex items-center justify-between z-20">
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-700 md:hidden bg-white"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-4 ml-auto">
        <span className="hidden md:inline text-gray-600 font-medium">
          Welcome, User
        </span>
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
