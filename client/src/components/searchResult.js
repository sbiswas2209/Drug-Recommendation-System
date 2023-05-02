import React from "react";

function SearchResults(props) {
  const { results } = props;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-screen">
      {results.map((result, index) => (
        <div key={index} className="mb-6">
          <h1 className="font-bold">{result.medicine_name}</h1>
          <p className="text-gray-700 mt-1">{result.content}</p>
          <p className="text-gray-700 mt-1">
            {result.dosage_type} | Manufactured By {result.manufacturer_name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
