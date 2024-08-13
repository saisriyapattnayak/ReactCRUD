import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  let [emp, setEmp] = useState([]);
  let [flag,setFlag]=useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees`)
      .then((res) => {
        setEmp(res.data);
        setFlag(false)
      })
      .catch(() => {
        console.log("Fail");
      });
  }, [flag]);

  let deleteUser=(id)=>{
    axios.delete(`http://localhost:5000/employees/${id}`)
    setFlag(true)
  }

  return (
    <div>
      {emp.map((users) => {
        return (
          <div className=" w-[100%]  bg-gradient-to-r from-sky-500 to-indigo-500 grid grid-col grid-flow-rows-4 gap-4" key={users.id}>
            <article className="h-60 w-80 border-2 flex justify-evenly items-center flex-col font-bold font text-2xl">
              <h1>Name:{users.empName}</h1>
              <h1>Salary:{users.empSalary}</h1>
              <h1>Company:{users.empCompany}</h1>
              <button className="h-10 w-36 border-2 "> <Link to={`/edit/${users.id}`}>Update</Link></button>
              <button className="h-10 w-36 border-2 " onClick={()=>{deleteUser(users.id)}}>Delete</button>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
