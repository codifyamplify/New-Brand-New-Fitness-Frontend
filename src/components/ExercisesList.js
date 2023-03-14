import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExercisesList({exercises, onDeleteExercise, onUpdateExercise}) {
    // console.log("in exercises list comp")
    
    // console.log("hi")
    // const displayedExercises = users.exercises.map((exercise) =>
    //     <Exercise />
    // )
    const displayedExercises = exercises.map(exercise => 
        <ExerciseCard 
            key={exercise.id}
            exercise={exercise}
            onDeleteExercise={onDeleteExercise}
            onUpdateExercise={onUpdateExercise}
        />)

    return (
        <div>
            <h3>Existing Exercises</h3>
            <h4>Total So Far: {exercises.length}</h4>
            {/* <h5>{displayedExercises}</h5> */}
            <ul>{displayedExercises}</ul>
        </div>
    )
}

export default ExercisesList