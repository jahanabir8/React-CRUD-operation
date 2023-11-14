import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddList from "../AddList/AddList";
import List from "../List/List";

const getFromLS = () => {
  const data = localStorage.getItem("Employees");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const Crud = () => {
  const [lists, setLists] = useState(getFromLS);

  useEffect(() => {
    localStorage.setItem("Employees", JSON.stringify(lists));
  }, [lists]);
  return (
    <div className="CRUD">
      <div className="container">
        <div className="CRUD__inner">
            <h1 className="text-center mb-5">Employee Details</h1>
          <div className="row">
            <div className="col-md-6">
              <AddList lists={lists} setLists={setLists} />
            </div>
            <div className="col-md-6">
              <List lists={lists} setLists={setLists} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
