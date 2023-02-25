import React, {useState} from "react";
import UserCard from "./UserCard";

function UsersList({users}){
    // console.log("from list")
    // console.log(users)
    return (
        <div>
            <h1>UsersList Component</h1>
            <UserCard users={users}/>

        </div>
    )
}

export default UsersList