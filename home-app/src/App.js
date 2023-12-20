import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./header/Header";

const Favourites = lazy(() => import("favourites/Favourites"));
const DogShower = lazy(() => import("dogShower/DogShower"));

function App() {
  return (
    <div className="app-home">
      <Header />
      <div className="body-side-panel-container">
        <Suspense fallback={<div>Loading ...</div>}>
          <DogShower className="dog-shower" />
          <Favourites className="favourites" />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
