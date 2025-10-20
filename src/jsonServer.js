import axios from "axios";
import React from "react";
import useState from "react";
import useEffect from "react";
//import React, { useState, useEffect } from "react";

function JsonServer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/categories")
    .then((res => setData(res.data))
    .catch(err => console.log(err))
  )}, []);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          <tbody>
            {data.map((d, i) => {
              return <tr key = {i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
              </tr>
            })}
          </tbody>
        </thead>

      </table>
    </div>
  );
}

export default JsonServer;
