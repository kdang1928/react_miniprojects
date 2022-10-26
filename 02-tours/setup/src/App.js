import React, { useState, useEffect, createContext } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

export const TourContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    setTours(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2>No Tours Left</h2>
          <button
            onClick={() => {
              fetchTours();
            }}
          >
            Refresh Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <TourContext.Provider value={[tours, setTours]}>
        <Tours tours={tours} />
      </TourContext.Provider>
    </main>
  );
}

export default App;
