import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import "./styles.css";
import dummyData from "../public/dummyData";

export default function App() {
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState([]);
  const [question, setQuestion] = useState("");

  const getData = () => {
    setData(dummyData);
  };

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelection(e.target.value);
  };

  const handleReset = () => {

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <div className="app">
        <h2 id="title">Companies</h2>
        <ul className="companies">
          <li>
            <Link to="/?q=foo&co=facebook">Facebook</Link>
          </li>
          <li>
            <Link to="/?q=foo&co=amazon">Amazon</Link>
          </li>
          <li>
            <Link to="/?q=foo&co=linkedin">LinkedIn</Link>
          </li>
          <li>
            <Link to="/?q=foo&co=netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/?q=foo&co=google">Google</Link>
          </li>
        </ul>

        <h2 id="title">Positions</h2>
        <ul className="positions">
          <li>
            <Link to="/?q=foo&pos=software+engineer">Software Engineer</Link>
          </li>
          <li>
            <Link to="/?q=foo&pos=business+analyst">Business Analyst</Link>
          </li>
          <li>
            <Link to="/?q=foo&pos=data+scientist">Data Scientist</Link>
          </li>
          <li>
            <Link to="/?q=foo&pos=marketing+analyst">Marketing Analyst</Link>
          </li>
          <li>
            <Link to="/?q=foo&pos=ml+engineer">ML Engineer</Link>
          </li>
        </ul>
        <h2 id="title">Questions</h2>
        <div className="questions">
          <p>{question}</p>
          
          <button onClick={handleReset} id='reset'>Reset</button>
        </div>
        

      </div>
    </Router>
  );
}
