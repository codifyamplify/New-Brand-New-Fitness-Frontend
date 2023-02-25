import React from "react";

function UserCard({user}){
    // const {name} = user.name
    // console.log("from card")
    // console.log(users)
    
    return (
        <div>
            <h1>UserCard Component</h1>
            <h3>user name: {user.name}</h3>
        </div>
    )
}

export default UserCard