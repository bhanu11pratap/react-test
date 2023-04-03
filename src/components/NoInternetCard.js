import React, { useState } from "react";

export default function NoInternetCard() {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="container">
      {cards.map((item) => (
        <div key={item.id} className="card"></div>
      ))}
    </div>
  );
}
