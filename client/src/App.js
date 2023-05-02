import "./App.css";
import { useState } from "react";
import SearchResults from "./components/searchResult";
import axios from "axios";

function App() {
  const baseUrl = "https://api.farmako.in/public/1.0.0/med-api";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching");
    axios
      .get(`${baseUrl}/inventory/search?keyword=${searchQuery}`, {
        headers: {
          Authorization: "Bearer f17cf8d4-df9d-4a27-a3c6-bb191bc5f1ee",
        },
      })
      .then((result) => {
        console.log("Searching");
        console.log(result.data);
        setSearchResults(result.data);
      });
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Search Page</h1>
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full max-w-sm mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>
      {searchResults !== [] ? (
        <SearchResults results={searchResults} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
