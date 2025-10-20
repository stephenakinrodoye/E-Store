import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
      
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Categories</h2>
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
