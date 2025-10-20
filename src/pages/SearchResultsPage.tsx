import React, { useState } from "react";

const SearchResultsPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // Temporary mock search; replace with real API call later
    const mockResults = [
      "Video 1 matching " + query,
      "Video 2 matching " + query,
      "Video 3 matching " + query,
    ];
    setResults(mockResults);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Search Videos</h1>
      <input
        type="text"
        placeholder="Search videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
        Search
      </button>

      <div style={{ marginTop: "2rem" }}>
        {results.length === 0 ? (
          <p>No results yet</p>
        ) : (
          <ul>
            {results.map((video, index) => (
              <li key={index}>{video}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
