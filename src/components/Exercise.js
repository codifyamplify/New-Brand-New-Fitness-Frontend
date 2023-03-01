import React from "react";

function Exercise({exerciseState}){
    // console.log(exerciseState)
    return (
        <li>
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
            Exercise-Id: {exerciseState.id}
            <br></br>
            Click Here To Delete : [X]
        </li>
        // <li>Hi</li>
    )
}

export default Exercise