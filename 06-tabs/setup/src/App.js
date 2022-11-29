import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    const resp = await fetch(url);
    const newJobs = await resp.json();
    setLoading(false);
    setJobs(newJobs);
    console.log(jobs);
  };

  if (loading) return <Loading />;

  return <h2>Tabs Project Setup</h2>;
}

export default App;
