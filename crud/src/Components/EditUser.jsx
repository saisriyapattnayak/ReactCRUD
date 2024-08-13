import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let obj = useParams();
  let [name, setname] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${obj.id}`)
      .then((res) => {
        console.log(res.data);
        setname(res.data.empName);
        setSalary(res.data.empSalary);
        setCompany(res.data.empCompany);
      })
      .catch(() => {
        console.log("Failure");
      });
  }, [obj.id]);


  function formHandel(e) {
    e.preventDefault();
    let payload = {
      empName: name,
      empSalary: salary,
      empCompany: company,
    };
    axios.put(`http://localhost:5000/employees/${obj.id}`, payload).then(() => {
      console.log("data updated");
      navigate("/users");
    });
  }

  
  return (
    <div className="w-screen  flex items-center justify-center">
      {/* <h1>Update Form</h1> */}
      <form
        action=""
        className="h-96 w-80 bg-transparent border-2 flex items-center justify-center flex-col justify-evenly font-bold border-cyan-500 rounded-lg"
      >
        {/* <h1></h1> */}
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          className="h-8 w-64 bg-transparent border-b-4 text-black outline-0"
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="">Salary</label>
        <input
          type="text"
          value={salary}
          className="h-8 w-64 bg-transparent border-b-4 text-black outline-0"
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="">Company</label>
        <input
          type="text"
          value={company}
          className="h-8 w-64 bg-transparent border-b-4 text-black outline-0"
          onChange={(e) => setCompany(e.target.value)}
        />
        <button
          onClick={formHandel}
          className="border-2 border-double h-8 w-32 "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
