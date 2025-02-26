import React from "react";
import ProfileList from "./components/profilelist";
import "bootstrap/dist/css/bootstrap.min.css";

const People = [
    { name: "Alice", favoriteFood: "Pizza", favoriteColor: "Blue" },
    { name: "Bob", favoriteFood: "Sushi", favoriteColor: "Green" },
    { name: "Charlie", favoriteFood: "Burger", favoriteColor: "Red" }
];

const App = () => {
    return (
        <div className="d-flex flex-column align-items-center vh-100 justify-content-center">
            <h1 className="mb-4 text-center">My Classmates</h1>
            <ProfileList people={People} />
        </div>
    );
};

export default App;
