import "./styles.css";
import { Dashboard } from "./components/Dashboard.js";
import React from "react";

export default function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Dashboard />
      </div>
    </React.StrictMode>
  );
}
