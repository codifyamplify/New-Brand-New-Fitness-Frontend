import React from "react";
import Exercise from "./Exercise";

function UserCard({user, onDeleteUser, onDeleteExercise, exercisesState}){
    // write delete user handler - this will be the fetch request NOT the state update
    function handleDeleteUserClick(){
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "DELETE",
        });
        onDeleteUser(user.id)
    }
    // function handleDeleteExerciseClick(key){
    //     // fetch(`http://localhost:9292/exercises/${user.exercises.id}`, {
    //     //     method: "DELETE",
    //     // })
    //     // onDeleteExercise(exerciseState.id)
    //     console.log(key.id)
    // }
    // map over exercises state, compare user_id to user.id
    // const filteredExercises = exercisesState.filter((exerciseState) => exerciseState.user_id === user.id)
    // const ideez = exercisesState.filter(exerciseState => console.log("hi"))
// console.log(keepers)
    // const currentUserId = user.id
    const filteredExercises = exercisesState.filter((exerciseState) =>
        exerciseState.user_id === user.id
        
    )

    const displayedExercises = filteredExercises.map((exerciseState) => 
        <Exercise 
            key={exerciseState.id}
            exerciseState={exerciseState}

        />
    )
    // console.log(
    //     exercisesState.filter((exerciseState) => exerciseState.user_id === currentUserId)
    //     )
// console.log(user.id)
console.log(user.name)
console.log(filteredExercises)
    return (
        <div className="UserCard">
            <h3>User: {user.name}</h3>
            <h4>Exercises:</h4>
            {/* <h5>{currentUserExercises}</h5> */}
            <h5>{displayedExercises}</h5>
            <button onClick={handleDeleteUserClick}>Delete User</button>
        </div>
    )
}

export default UserCard

