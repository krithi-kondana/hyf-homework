import React from "react";
import userContext from "./usercontext";
import Renderusers from "./renderusers";

function Userlist() {
    const { isLoading, users } = React.useContext(userContext);

    return (
       <div>
        <ul>{isLoading ? <p>loading...</p> : users === undefined ? <p>No results</p> : <Renderusers />}</ul>
       </div> 
    )
}

export default Userlist;

        