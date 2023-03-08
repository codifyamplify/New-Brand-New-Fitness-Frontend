import React from "react";

function Navbar({onPageChange}){
    function handleLinkClick(e) {
        e.preventDefault();
        onPageChange(e.target.pathname)
    }

    return(
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="users">User List</a>
            <a onClick={handleLinkClick} href="exercises">Exercise List</a>
            <a onClick={handleLinkClick} href="users/new">New User</a>
            <a onClick={handleLinkClick} href="exercises/new">New Exercise</a>
            <a onClick={handleLinkClick} href="exercises/DYNAMINC ID/edit">Update Exercise</a>
        </nav>
    )
}

export default Navbar