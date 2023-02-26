import React from "react";
import UserCard from "./UserCard";

function UsersList({users}){
    // console.log("from list")
    // console.log(users)
    // create variable with value of map of users
    const usersGroup = users.map((user) => 
        <UserCard 
            key={user.id}
            user={user}
               
        />)
    return (
        <div>
            <h1>UsersList Component</h1>
            {/* <UserCard users={users}/> */}
            {usersGroup}
        </div>
    )
}

export default UsersList