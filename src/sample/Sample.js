import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Richard Hendricks",
    url: "./img/richard.jpg"
  },
  {
    name: "Erlich Bachman",
    url: "./img/erlich.jpg"
  },
  {
    name: "Monica Hall",
    url: "./img/monica.jpg"
  },
  {
    name: "Jared Dunn",
    url: "./img/jared.jpg"
  },
  {
    name: "Dinesh Chugtai",
    url: "./img/dinesh.jpg"
  }
];

function Sample() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction === "right" ? "いいね!" : "うーん...");
  };

  return (
    <div>
      <h1>F Smile Japan</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">{lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Sample;
