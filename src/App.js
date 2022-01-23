import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import placesArray from "./data";

export default function App () {

    const entries = placesArray.map(place => {
        return (
            <Card 
                key={place.id}
                entry={place}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <main>
                {entries}
            </main>
            <Footer />
        </div>
    )
}
