import React from "react";
import { useStore } from "store/store";
import "./App.css";
import FavouritesPanel from "./FavouritesPanel";

function App() {
  const { addBreed } = useStore();
  const [breed, setBreed] = React.useState("");
  return (
    <div>
      <FavouritesPanel />
      <input value={breed} onChange={(event) => setBreed(event.target.value)} />
      <button onClick={() => addBreed(breed)}>Add breed</button>
    </div>
  );
}

export default App;
