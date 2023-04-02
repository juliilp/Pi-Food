import React from "react";
import s from "./Loader.css";
export default function Loader() {
  return (
    <div className="container_loader">
      <svg className="svg_loader" viewBox="25 25 50 50">
        <circle className="circle_loader" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}
