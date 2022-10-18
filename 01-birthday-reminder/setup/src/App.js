import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
    console.log("List cleared");
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} setPeople={setPeople} />
        <button onClick={() => clearList()}>Clear All</button>
        <button onClick={() => setPeople(data)}>Reset</button>
      </section>
    </main>
  );
}

export default App;
