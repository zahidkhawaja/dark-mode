import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className = "homepage">
            <h2>Welcome to Crypto Tracker!</h2>
            <div className = "enter">
            <Link to = "/data">Enter</Link>
            </div>
        </div>
    )
}