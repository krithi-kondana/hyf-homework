import React from "react";
import userContext from "./usercontext";
import { Link, } from "react-router-dom";


function Renderusers() {
    const { users } = React.useContext(userContext);
    return (
        <div className="user">       
            {users.map(user => 
                <li key={user.id}>
                    <img src={user.avatar_url} alt="userpic" />
                    <Link to={`/${user.login}`}>{user.login}</Link>
                </li>           
            )}
        </div>
    )
}

export default Renderusers;
