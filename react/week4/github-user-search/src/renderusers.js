import React from "react";
import userContext from "./usercontext";

function Renderusers() {
    const {  users } = React.useContext(userContext);

return (
    <div className="user">
        {users.map(user => 
            <li>
                <img src={user.avatar_url} alt="userpic" />
                <a href={user.html_url}>{user.login}</a>
            </li>
        )}
    </div>
)
}

export default Renderusers;