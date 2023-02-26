import React from "react";
import UserCard from "./UserCard";

function UsersList({users, onDeleteUser}){
    // console.log("from list")
    // console.log(users)
    // create variable with value of map of users
    const usersGroup = users.map((user) => 
        <UserCard 
            key={user.id}
            user={user}
            onDeleteUser={onDeleteUser}
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