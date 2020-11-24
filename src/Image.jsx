import React from "react";
import "./styles.css";
export default function Image(props) {
  const x = `https://source.unsplash.com/weekly?${props.name}`;
  return (
    <div className="Image">
      <img src={x} alt="k" />
    </div>
  );
}
