import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const [item, setItem] = useState({});

    useEffect(() => {
      let isFetched = true
      fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(item => {
        if(isFetched) {
          setItem(item);
        }
      })
      return () => isFetched = false
    })

    return (
      <div>
        <div className="userProfile">
          <img src={item.avatar_url} alt="userpicture" />
          <h1>Username: {item.login}</h1>
          <h3>Number of repositories: {item.public_repos}</h3>
          <h3>Followers: {item.followers}</h3>
          <h3>Location: {item.location}</h3> 
          <a href={item.html_url}>View github profile</a> 
        </div>
       
        <div className="homelink">
          <Link to="/">Go to home page</Link>
        </div>
      </div>
    );
   };
   export default Profile;