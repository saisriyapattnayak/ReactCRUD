import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import style from "./home.module.css"
const CreateUser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");

  
  let formHandle = (e) => {
    e.preventDefault()
    let payload = {
      empName: name,
      empSalary: salary,
      empCompany: company,
    };
    axios.post(`http://localhost:5000/employees`, payload)
      .then(() => {
        console.log("got");
      })
      .catch(() => {
        console.log("fail");
      });
  };

  return (
    <div>
      <section className="h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
        <form
          action=""
          className="h-96 w-80 bg-transparent border-2 flex items-center justify-center flex-col justify-evenly font-bold"
        >
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="h-8 w-64 bg-transparent border-b-2 text-black outline-0"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="">Salary</label>
          <input
            type="number"
            className="h-8 w-64 bg-transparent border-b-2 text-black outline-0"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
          <label htmlFor="">Company</label>
          <input
            type="text"
            className="h-8 w-64 bg-transparent border-b-2 text-black outline-0"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
          <button
            className="border-2 border-double h-8 w-32 "
            onClick={formHandle}

          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateUser;
