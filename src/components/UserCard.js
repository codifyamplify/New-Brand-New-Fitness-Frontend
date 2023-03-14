import React from "react";
import Exercise from "./Exercise";

function UserCard({user, onDeleteUser, onDeleteExercise, exercises}){
    // write delete user handler - this will be the fetch request NOT the state update
    function handleDeleteUserClick(){
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "DELETE",
        });
        onDeleteUser(user.id)
    }

    const filteredExercises = exercises.filter((exercise) =>
        exercise.user_id === user.id    
    )

    const displayedExercises = filteredExercises.map((exercise) => 
        <Exercise 
            key={exercise.id}
            exercise={exercise}
            onDeleteExercise={onDeleteExercise}
        />
    )

    return (
        <div className="UserCard">
            <h3>User: {user.name}</h3>
            <h4>Entries So Far: {filteredExercises.length}</h4>
            <h4>Exercises:</h4>
            <h5>{displayedExercises}</h5>
            <button onClick={handleDeleteUserClick}>Delete User</button>
        </div>
    )
}

export default UserCard

