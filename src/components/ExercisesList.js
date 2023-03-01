import React from "react";
import Exercise from "./Exercise";

function ExercisesList({exercisesState}) {
    // console.log("in exercises list comp")
    
    // console.log("hi")
    // const exercisesGroup = users.exercises.map((exercise) =>
    //     <Exercise />
    // )
    const exercisesGroup = exercisesState.map(exerciseState => 
        <Exercise 
            key={exerciseState.id}
            exerciseState={exerciseState}
        />)

    return (
        <div>
            <h1>Exercises List Component</h1>
            {/* <h5>{exercisesGroup}</h5> */}
            <ul>{exercisesGroup}</ul>
        </div>
    )
}

export default ExercisesList