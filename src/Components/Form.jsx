import React from "react";
import { useGlobalcontext } from "../../context/ContextProvider";


const Form = () => {
    const { handlesubmit, handlechange, data, sector, sectorvalue } = useGlobalcontext();
  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <form onSubmit={handlesubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" required 
            value={data.name} onChange={handlechange} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required 
            value={data.email} onChange={handlechange} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="age" className="block font-medium text-gray-700">Age</label>
          <input type="number" name="age" id="age" placeholder="Enter your age" required 
            value={data.age} onChange={handlechange} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="sector" className="block font-medium text-gray-700">Sector</label>
          <select name="sector" id="sector" value={sector} required onChange={sectorvalue} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300">
            <option value="">Select a sector</option>
            <option value="it">IT</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        {sector === "it" && (
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Client</label>
            <input type="text" name="client" placeholder="Client" required 
              value={data.client} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />

            <label className="block font-medium text-gray-700">Description</label>
            <input type="text" name="description" placeholder="Description" required 
              value={data.description} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />
          </div>
        )}

        {sector === "healthcare" && (
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Contact</label>
            <input type="text" name="contact" placeholder="Contact" required 
              value={data.contact} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />

            <label className="block font-medium text-gray-700">Medical History</label>
            <input type="text" name="medicalhistory" placeholder="Medical History" required 
              value={data.medicalhistory} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />

            <label className="block font-medium text-gray-700">Gender</label>
            <input type="text" name="gender" placeholder="Gender" required 
              value={data.gender} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />

            <label className="block font-medium text-gray-700">Current Medication</label>
            <input type="text" name="currentmedication" placeholder="Current Medication" required 
              value={data.currentmedication} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />
          </div>
        )}

        {sector === "education" && (
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Education Level</label>
            <input type="text" name="educationlevel" placeholder="Education Level" required 
              value={data.educationlevel} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />

            <label className="block font-medium text-gray-700">Passout Year</label>
            <input type="text" name="passoutyear" placeholder="Passout Year" required 
              value={data.passoutyear} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />
          </div>
        )}

        {sector === "finance" && (
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Loan Type</label>
            <input type="text" name="loantype" placeholder="Loan Type" required 
              value={data.loantype} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />

            <label className="block font-medium text-gray-700">Amount</label>
            <input type="text" name="amount" placeholder="Amount" required 
              value={data.amount} onChange={handlechange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" 
            />
          </div>
        )}

        <button type="submit" className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
