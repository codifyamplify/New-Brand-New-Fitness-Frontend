import React from "react";

function UserCard({user}){
    // write delete user handler - this will be the fetch request NOT the state update
    function handleDeleteClick(){
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "DELETE",
        });
        console.log(`${user.name} was deleted`)
    }
    // const {name} = user.name
    // console.log("from card")
    const exercises = user.exercises.map((exercise) => <li key={exercise.id}>{JSON.stringify(exercise)}</li>)
    
    return (
        <div>
            <h1>UserCard Component</h1>
            <h3>user name: {user.name}</h3>
            <ul>{exercises}</ul>
            <button onClick={handleDeleteClick}>Delete User</button>
        </div>
    )
}

export default UserCard