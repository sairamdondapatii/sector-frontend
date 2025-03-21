import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import ShowData from "./Components/ShowData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text">
          Real-Time Sector-Based Data Entry & Export Application
        </h2>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <Form/>
      </div>

      <div className="mt-8">
        <ShowData />
      </div>
    </div>
  );
}

export default App;
