import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const RickAndMortyFetcher = () => {
  const [dataType, setDataType] = useState("character"); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://rickandmortyapi.com/api/${dataType}`;
        const response = await axios.get(url);
        setItems(response.data.results); 
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataType]); 

  return (
    <div>
      <h1>Ricky And Morty</h1>
      <h2>{dataType}s</h2>
      
      <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
        <option value="Character">Characters</option>
        <option value="Episode">Episodes</option>
        <option value="Location">Locations</option>
      </select>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyFetcher;
