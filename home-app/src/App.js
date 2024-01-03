import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import Header from "./header/Header";

const Favourites = lazy(() => import("favourites/Favourites"));
const DogInit = lazy(() => import("dogShower/DogText"));

function App() {
    const deps = ['./DogText', './DogShower'];
    const [components, setComponents] = useState([]);

    useEffect(() => {
        function loadComponent(scope, module) {
            return async () => {
                if (!window[scope]) {
                    console.log('Remote scope not found');
                    return;
                }
                const factory = await window[scope].get(module.startsWith('./') ? module : `./${module}`);
                const Module = factory();
                setComponents((prevState) => [...prevState, Module.default]);
                return Module;
            };
        }
        for (let i = 0; i < deps.length; i++) {
            loadComponent('dogShower', deps[i])();
        }
    }, []);

    return (
        <div className="app-home">
            <Header />
            <div className="body-side-panel-container">
                <Suspense fallback={<div>Loading ...</div>}>
                    <div className="dog-shower" />
                    {components.map((component, index) => {
                        const Component = component;
                        return <Component key={index} />;
                    })}
                    <Favourites className="favourites" />
                </Suspense>
            </div>
        </div>
    );
}

export default App;
