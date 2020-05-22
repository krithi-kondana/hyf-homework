import React from "react";
import octocat from "./octocat.gif"
import { Link, } from "react-router-dom";

function About() {
    return(
        <div className="about">
           <h1>Welcome to github search page</h1> 
           <img src={octocat} alt="octocat" />
           <p>This app fetches api from github and renders user list based on the user you search. You can click on username and get more information about their profile.</p>
            <Link to="/">Go to home page</Link>
        </div>
    )
}

export default About;