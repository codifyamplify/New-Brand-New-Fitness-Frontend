import React from "react";
import UserCard from "./UserCard";

function UsersList({users, onDeleteUser, onDeleteExercise, exercises}){
    const usersGroup = users.map((user) => 
        <UserCard 
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
            {usersGroup}
        </div>
    )
}

export default UsersList