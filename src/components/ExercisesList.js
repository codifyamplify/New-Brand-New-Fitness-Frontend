import React from "react";
import Exercise from "./Exercise";

function ExercisesList({exercisesState, onDeleteExercise, onUpdateExercise}) {
    // console.log("in exercises list comp")
    
    // console.log("hi")
    // const exercisesGroup = users.exercises.map((exercise) =>
    //     <Exercise />
    // )
    const exercisesGroup = exercisesState.map(exerciseState => 
        <Exercise 
            key={exerciseState.id}
            exerciseState={exerciseState}
            onDeleteExercise={onDeleteExercise}
            onUpdateExercise={onUpdateExercise}
        />)

    return (
        <div>
            <h3>Existing Exercises</h3>
            <h4>Total So Far: {exercisesState.length}</h4>
            {/* <h5>{exercisesGroup}</h5> */}
            <ul>{exercisesGroup}</ul>
        </div>
    )
}

export default ExercisesList