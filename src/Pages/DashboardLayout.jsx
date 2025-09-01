import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header setIsOpen={setIsOpen} />
        <main className="flex-1 p-4 mt-16 md:mt-0 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
