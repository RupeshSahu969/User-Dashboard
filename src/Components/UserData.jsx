import { Link } from "react-router-dom";
import { Mail, Phone, Building2, User } from "lucide-react"; // nice icons

const UserData = ({ user }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md hover:border-blue-400 transition duration-200">
    {/* Header */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      </div>
    </div>

    {/* Info */}
    <div className="space-y-2 text-sm text-gray-600">
      <p className="flex items-center gap-2">
        <Mail size={16} className="text-blue-500" /> {user.email}
      </p>
      <p className="flex items-center gap-2">
        <Phone size={16} className="text-green-500" /> {user.phone}
      </p>
      <p className="flex items-center gap-2">
        <Building2 size={16} className="text-purple-500" />{" "}
        {user.company?.name || "N/A"}
      </p>
    </div>

    {/* Action */}
    <div className="mt-4 flex justify-end">
      <Link
        to={`/user/${user.id}`}
        className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default UserData;
