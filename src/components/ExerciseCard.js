import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ExerciseCard({exercise, onDeleteExercise}){
    const params = useParams()
    function handleDeleteExerciseClick(){
        fetch(`http://localhost:9292/exercises/${exercise.id}`,{
            method: "DELETE",
        });
        onDeleteExercise(exercise.id)
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
            Exercise-Id: {exercise.id}
            <br></br>
            Click Here To Delete:
            <button onClick={handleDeleteExerciseClick}>[X]</button>
            Click Here to Update:
            <Link to={`/exercises/${exercise.id}/edit`}>
                <button >Edit This Exercise!</button>
            </Link>
        </li>
    )
}

export default ExerciseCard