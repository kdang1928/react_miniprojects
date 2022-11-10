import React, { useState } from "react";
import items from "./data";

const Categories = ({ setItems }) => {
  const [selected, setSelected] = useState("all");
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className={`filter-btn ${selected === category && "selected"}`}
            onClick={() => {
              if (category !== "all")
                setItems(items.filter((item) => item.category === category));
              else setItems(items);
              setSelected(category);
            }}
          >
            {category}
          </button>
        );
      })}
      {/* <button
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
      </button> */}
    </div>
  );
};

export default Categories;
