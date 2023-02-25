import React from "react";

function UserCard({users}){
    // const {name} = user.name
    console.log("from card")
    console.log(users)
    return (
        <li>
            {/* <h2>{users.name}</h2> */}

            <h1>UserCard Component</h1>
        </li>
    )
}

export default UserCard