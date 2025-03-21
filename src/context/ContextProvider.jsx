import React, { createContext, useContext, useState } from 'react'

const context = createContext();

const ContextProvider = ({children}) => {
    const [sector, setSector] = useState("");

  const initialdata = {
    name: "",
    email: "",
    age: 0,
    sector: "",
    client: "",
    description: "",
    contact: "",
    medicalhistory: "",
    gender: "",
    currentmedication: "",
    educationlevel: "",
    passoutyear: "",
    loantype: "",
    amount: "",
  };

  const [data, setData] = useState(initialdata);

  const handlechange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const sectorvalue = (e) => {
    setSector(e.target.value);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      let response = await fetch("http://localhost:8090/data/postdata", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resdata = await response.json();
      console.log(resdata);
      setData(initialdata);
      setSector("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <context.Provider value={{handlechange,handlesubmit,sector,sectorvalue,data,setData}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider

export const useGlobalcontext = ()=>{
    return useContext(context);
}