import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddList = ({ lists, setLists }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = { id, name, department };
    setLists([...lists, newList]);
    setId("");
    setName("");
    setDepartment("");

    toast.success("added");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          onChange={handleId}
          id="EMPid"
          value={id}
          placeholder="Your ID"
          required
        />
        <label htmlFor="EMPid">Your ID</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          onChange={handleName}
          id="EMPname"
          value={name}
          placeholder="Your Name"
          required
        />
        <label htmlFor="EMPname">Your Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          onChange={handleDepartment}
          id="department"
          value={department}
          placeholder="Your Department"
          required
        />
        <label htmlFor="EMPname">Your Department</label>
      </div>
      <button type="submit" className="btn btn-primary w-100 font-bold">
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};

export default AddList;
