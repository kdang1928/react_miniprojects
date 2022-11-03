import React, { useState } from "react";
import items from "./data";

const Categories = ({ setItems }) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="btn-container">
      <button
        className={`filter-btn ${selected || "selected"}`}
        onClick={() => {
          setItems(items);
          setSelected("");
        }}
      >
        All
      </button>
      <button
        className={`filter-btn ${selected === "breakfast" && "selected"}`}
        onClick={() => {
          setItems(items.filter((item) => item.category === "breakfast"));
          setSelected("breakfast");
        }}
      >
        Breakfast
      </button>
      <button
        className={`filter-btn ${selected === "lunch" && "selected"}`}
        onClick={() => {
          setItems(items.filter((item) => item.category === "lunch"));
          setSelected("lunch");
        }}
      >
        Lunch
      </button>
      <button
        className={`filter-btn ${selected === "shakes" && "selected"}`}
        onClick={() => {
          setItems(items.filter((item) => item.category === "shakes"));
          setSelected("shakes");
        }}
      >
        Shakes
      </button>
    </div>
  );
};

export default Categories;
