import React from "react";
import UserCard from "./UserCard";

function UsersList({users, onDeleteUser, onDeleteExercise, exercises}){
    // console.log("from list")
    // console.log(users)
    // create variable with value of map of users
    // create a filter for exercise state and store in variable


    const usersGroup = users.map((user) => 
        <UserCard 
            // a key value is needed when mapping
            key={user.id}
            user={user}
            onDeleteUser={onDeleteUser}
            exercises={exercises}
            onDeleteExercise={onDeleteExercise}
        />)
    return (
        <div>
            <h3>Existing Users</h3>
            <h4>Total So Far: {users.length}</h4>
            {/* <UserCard users={users}/> */}
            {usersGroup}
        </div>
    )
}

export default UsersList