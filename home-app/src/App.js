import React, { Suspense, lazy, useEffect, useState } from "react";
import { useStore } from "store/store";
import "./App.css";

const Header = lazy(() => import("header/Header"));
const Favourites = lazy(() => import("favourites/Favourites"));
// const { useStore } = lazy(() => import("store/store"));
console.log("useStore", useStore);

function App() {
  const { breeds, addBreed } = useStore();
  const [imageSrc, setImageSrc] = useState("");
  const currentBreed = imageSrc.split("/")[4];
  const isCurrentBreedFavourite = breeds.includes(currentBreed);

  useEffect(() => getRandomImage(setImageSrc), []);

  return (
    <div className="app-home">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="body-side-panel-container">
        <div className="main-container">
          <h2>This is {currentBreed}</h2>
          <img
            src={imageSrc}
            alt={currentBreed}
            onError={() => {
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
        <Suspense fallback={<div>Loading Favourites...</div>}>
          <Favourites />
        </Suspense>
      </div>
    </div>
  );
}

const getRandomImage = async (setImageSrc) => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      setImageSrc(result.message);
      return result.message;
    })
    .catch((error) => {
      console.log(error);
      return {};
    });
};

export default App;
