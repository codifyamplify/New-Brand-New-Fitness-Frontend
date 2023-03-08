import React from "react";
import UpdateExercise from "./UpdateExercise";

function Exercise({exerciseState, onDeleteExercise}){
    // write delete CLICK fetch handler for exercise component to 9292
    function handleDeleteExerciseClick(){
        fetch(`http://localhost:9292/exercises/${exerciseState.id}`,{
            method: "DELETE",
        });
        onDeleteExercise(exerciseState.id)
    }

    return (
        <li className="ExerciseInstance">
            Name: {exerciseState.name}
            <br></br>
            Muscle Group: {exerciseState.muscle_group}
            <br></br>
            Weight: {exerciseState.weight}
            <br></br>
            Sets: {exerciseState.sets}
            <br></br>
            Reps: {exerciseState.reps}
            <br></br>
            Rest: {exerciseState.rest}
            <br></br>
            {/* User-Id: {exerciseState.user_id} */}
            {/* Exercise-Id: {exerciseState.id} */}
            {/* <br></br> */}
            Click Here To Delete:
            <button onClick={handleDeleteExerciseClick}>[X]</button>
            Click Here to Update:
            {/* <button onClick={handleUpdateExerciseClick}>[X]</button> */}
            {/* <UpdateExercise /> */}
        </li>
        // <li>Hi</li>
    )
}

export default Exercise