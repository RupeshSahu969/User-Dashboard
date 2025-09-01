import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import { Mail, Phone, Building2, MapPin, Globe } from "lucide-react";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(AuthContext);
  const user = users.find((u) => u.id.toString() === id);

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">User not found</p>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        {/* Back link */}
        <Link to="/" className="text-blue-600 text-sm hover:underline">
          ← Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            {user.name}
          </h2>
          <p className="text-gray-500">{user.company?.name || "N/A"}</p>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <Mail size={18} className="text-blue-500" /> {user.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} className="text-green-500" /> {user.phone}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-red-500" />{" "}
            {user.address?.street}, {user.address?.city}
          </p>
          <p className="flex items-center gap-2">
            <Globe size={18} className="text-purple-500" /> Lat:{" "}
            {user.address?.geo?.lat}, Lng: {user.address?.geo?.lng}
          </p>
          <p className="flex items-center gap-2">
            <Building2 size={18} className="text-gray-500" />{" "}
            {user.company?.catchPhrase || "No catchphrase"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
