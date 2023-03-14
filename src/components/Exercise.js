import React from "react";
import UpdateExercise from "./UpdateExercise";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Exercise({exercise, onDeleteExercise, onUpdateExercise}){
    const params = useParams()
    // write delete CLICK fetch handler for exercise component to 9292
    function handleDeleteExerciseClick(){
        fetch(`http://localhost:9292/exercises/${exercise.id}`,{
            method: "DELETE",
        });
        onDeleteExercise(exercise.id)
    }

    function handleUpdateExerciseClick(){
        console.log(exercise.id)
    }

    function clickMyId(){
        console.log(exercise.id)
    }

    return (
        <li className="ExerciseInstance">
            Name: {exercise.name}
            <br></br>
            Muscle Group: {exercise.muscle_group}
            <br></br>
            Weight: {exercise.weight}
            <br></br>
            Sets: {exercise.sets}
            <br></br>
            Reps: {exercise.reps}
            <br></br>
            Rest: {exercise.rest}
            <br></br>
            {/* User-Id: {exercise.user_id} */}
            Exercise-Id: {exercise.id}
            <br></br>
            Click Here To Delete:
            <button onClick={handleDeleteExerciseClick}>[X]</button>
            Click Here to Update:
            {/* <button onClick={clickMyId}>[my id]</button> */}
            {/* experiment with making a react button into a Link */}
            <Link to={`/exercises/${exercise.id}/edit`}>
                <button >Edit This Exercise!</button>
            </Link>
        </li>
        // <li>Hi</li>
    )
}

export default Exercise