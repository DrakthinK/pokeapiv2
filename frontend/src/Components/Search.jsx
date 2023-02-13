import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const search = async () => {
      if (value === "") {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v2/pokemon/${value}`
        );
        setResults([response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    search();
  }, [value]);
  return (
    <form className="max-w-xl px-4 w-96 mb-4">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>
    </form>
  );
}
