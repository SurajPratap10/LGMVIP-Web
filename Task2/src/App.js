import logo from "./logo.png";
import "./index.css";

import React, { useState } from "react";

function App() {

    const [users, setUsers] = useState();
    const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");   // API call
    const data = await response.json();
    setUsers(data.data);

  };

  return (
    <>
      <header className="app">
        <img className="linkedin" src={logo} alt="LinkedIn" />
        <div className="btn" onClick={getUsers}>Get Users</div>
      </header>

      <div className="author">
        <h3>Built by: Suraj Pratap</h3>
        <h4>#Task-2</h4>
      </div>

      <div className="row">
        {users?.map((present, index) => {
          return (
            <div className="card column" key={index}>
              <img src={present.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {present.first_name} {present.last_name}
                </h3>
                <h4 className="card-text">{present.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;