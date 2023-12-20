import React from "react";
import { useStore } from "store/store";
import "./App.css";

function FavouritesPanel() {
  const { breeds, emptyBreeds } = useStore();
  return (
    <div className="side-panel">
      <div className="side-panel__container">
        <h2>Favourites &#129505;</h2>
        {breeds.length === 0 ? (
          <p>You have no favourites yet</p>
        ) : (
          <ul>
            {breeds.map((breed) => (
              <li key={breed}>{breed}</li>
            ))}
          </ul>
        )}
      </div>
      <button className="clear-button" onClick={emptyBreeds}>
        Clear
      </button>
    </div>
  );
}

export default FavouritesPanel;
