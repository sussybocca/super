// src/components/ui/Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Link to="/" className="text-2xl font-bold">Vibro</Link>
      <div className="flex gap-4">
        <Link to="/videos">Videos</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos..."
          className="px-2 py-1 rounded text-black"
        />
        <button onClick={handleSearch} className="bg-blue-500 px-3 py-1 rounded">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
