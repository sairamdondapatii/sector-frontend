import React, { useState } from "react";
import RenderTable from "./RenderTable";
import Button from "./Button";

const ShowData = () => {
  const [sector, setSector] = useState("");
  const [data, setData] = useState([]);

  const sectorvalue = (e) => {
    setSector(e.target.value);
  };

  const getData = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`https://sector-backend.onrender.com/data/getdata?sector=${sector}`);
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text mb-6 text-center">
        Sector-Based Data Viewer
      </h2>

      <form onSubmit={getData} className="flex flex-col gap-4">
        <div>
          <label htmlFor="sector" className="block text-lg font-medium text-gray-700">
            Select Sector
          </label>
          <select
            name="sector"
            id="sector"
            value={sector}
            required
            onChange={sectorvalue}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a sector</option>
            <option value="it">IT</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        <button 
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:cursor-pointer hover:bg-blue-700 transition-all"
        >
          Get Data
        </button>
      </form>

      <div className="mt-8">
        <RenderTable data={data} />
      </div>

      {/* Export Buttons */}
      {sector !== '' && 
        <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Button 
          text="Export as Excel" 
          link={`https://sector-backend.onrender.com/${sector}/export/excel`}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md hover:scale-105 transition"
        />
        <Button 
          text="Export as PDF" 
          link={`https://sector-backend.onrender.com/${sector}/export/pdf`}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md  hover:scale-105 transition"
        />
      </div>
      }
    </div>
  );
};

export default ShowData;
