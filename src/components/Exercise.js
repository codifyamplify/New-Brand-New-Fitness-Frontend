import React from "react";
import UpdateExercise from "./UpdateExercise";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Exercise({exerciseState, onDeleteExercise, onUpdateExercise}){
    const params = useParams()
    // write delete CLICK fetch handler for exercise component to 9292
    function handleDeleteExerciseClick(){
        fetch(`http://localhost:9292/exercises/${exerciseState.id}`,{
            method: "DELETE",
        });
        onDeleteExercise(exerciseState.id)
    }

    function handleUpdateExerciseClick(){
        console.log(exerciseState.id)
    }

    function clickMyId(){
        console.log(exerciseState.id)
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
            <button onClick={clickMyId}>[my id]</button>
            {/* experiment with making a react button into a Link */}
            <Link to={`/exercises/${exerciseState.id}/edit`}>
                <button>Go to Edit Man!</button>
            </Link>
        </li>
        // <li>Hi</li>
    )
}

export default Exercise