import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import styles from "./App.module.css";
import getRandomImage from "./getRandomImage";

function App({ className }) {
  const { breeds, addBreed } = useStore();
  const [imageSrc, setImageSrc] = useState("");
  const currentBreed = imageSrc.split("/")[4];
  const isCurrentBreedFavourite = breeds.includes(currentBreed);

  useEffect(() => {
    async function onMount() {
      await getRandomImage(setImageSrc);
    }
    onMount();
  }, []);

  return (
    <div className={`${styles.mainContainer} ${className}`}>
      <h2>This is {currentBreed}</h2>
      <img
        src={imageSrc}
        alt={currentBreed}
        className={styles.dogImage}
        onError={() => {
          if (!imageSrc) return;
          console.log("Error with ", imageSrc);
          getRandomImage(setImageSrc);
        }}
      />
      <div className="buttons-bar">
        <button
          onClick={() => addBreed(currentBreed)}
          disabled={isCurrentBreedFavourite}
        >
          {isCurrentBreedFavourite ? "Added!" : "Add to favourites"}
        </button>
        <button
          className="seconadary"
          onClick={() => getRandomImage(setImageSrc)}
        >
          Show next
        </button>
      </div>
    </div>
  );
}

export default App;
