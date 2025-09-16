import React from "react";

function Card({ children }) {
  return (
    <div className="card" style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "20px auto" }}>
      {children}
    </div>
  );
}

export default Card;
