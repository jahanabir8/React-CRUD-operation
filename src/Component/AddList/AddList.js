import React, { useState } from "react";

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
    const newList = {id, name, department};
    setLists([...lists, newList])
    setId('')
    setName('')
    setDepartment('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          onChange={handleId}
          id="EMPid"
          value={id}
          placeholder="Your ID"
          required
        />
        <label for="EMPid">Your ID</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          onChange={handleName}
          id="EMPname"
          value={name}
          placeholder="Your Name"
          required
        />
        <label for="EMPname">Your Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          onChange={handleDepartment}
          id="department"
          value={department}
          placeholder="Your Department"
          required
        />
        <label for="EMPname">Your Department</label>
      </div>
      <button type="submit" className="btn btn-primary w-100 font-bold">
        Submit
      </button>
    </form>
  );
};

export default AddList;
