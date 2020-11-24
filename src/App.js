import React, { useState } from "react";
import "./styles.css";
import Image from "./Image";
export default function App() {
  let [s, sets] = useState("");
  return (
    <div className="App">
      <h1>Let's Guess</h1>
      <br />
      <input
        onChange={() => {
          sets(document.getElementById("search").value);
        }}
        id="search"
        placeholder="We will Try our best"
      />

      <Image name={s} />
    </div>
  );
}
