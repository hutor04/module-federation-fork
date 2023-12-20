import React from "react";
import { useStore } from "store/store";
import styles from "./App.module.css";

function FavouritesPanel({ className }) {
  const { breeds, emptyBreeds } = useStore();
  return (
    <div className={`${styles.sidePanel} ${className}`}>
      <div className={styles.sidePanel__container}>
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
