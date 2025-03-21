import React from "react";


const RenderTable = ({ data }) => {
  if (data.length === 0) {
    return <p className="text-gray-600 text-center mt-4">Select an sector to view data</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {headers.map((header) => (
              <th key={header} className="border border-gray-300 px-6 py-3 text-left">
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border border-gray-300 hover:bg-gray-200">
              {headers.map((header) => (
                <td key={header} className="border border-gray-300 px-6 py-3 text-gray-700 text-center">
                  {item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { RenderTable};
