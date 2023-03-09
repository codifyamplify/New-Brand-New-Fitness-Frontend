import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="users">User List</Link>
            <Link to="exercises">Exercise List</Link>
            <Link to="users/new">New User</Link>
            <Link to="exercises/new">New Exercise</Link>
            {/* <Link exact to="exercises/DYNAMINC ID/edit">Update Exercise</Link> */}
        </nav>
    )
}

export default Navbar