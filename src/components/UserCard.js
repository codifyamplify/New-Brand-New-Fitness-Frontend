import React from "react";

function UserCard({user, onDeleteUser}){
    // write delete user handler - this will be the fetch request NOT the state update
    function handleDeleteClick(){
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "DELETE",
        });
        // state setter prop goes here
        // console.log(`${user.name} was deleted`)
        onDeleteUser(user.id)
    }
    // const {name} = user.name
    // console.log("from card")
    const exercises = user.exercises.map((exercise) => <li key={exercise.id}>{JSON.stringify(exercise)}</li>)
    
    return (
        <div>
            <h3>UserCard Component</h3>
            <h4>user name: {user.name}</h4>
            <ul>{exercises}</ul>
            <button onClick={handleDeleteClick}>Delete User</button>
        </div>
    )
}

export default UserCard