import React from "react";

function UserCard({user}){
    // const {name} = user.name
    // console.log("from card")
    const exercises = user.exercises.map((exercise) => <li key={exercise.id}>{JSON.stringify(exercise)}</li>)
    
    return (
        <div>
            <h1>UserCard Component</h1>
            <h3>user name: {user.name}</h3>
            <ul>{exercises}</ul>
        </div>
    )
}

export default UserCard