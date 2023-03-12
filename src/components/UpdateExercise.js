// import React from "react";
// import { useParams } from "react-router-dom";

// function UpdateExercise({exercisesState}){
//     // const params = useParams()
//     // const current = exercisesState
//     const params = useParams()
//     return(
//         <div>
//             <h3>Update Exercise component</h3>
//             <h5>my id is</h5>
//             {/* <h5>my name is {exercisesState.id}</h5> */}
//         </div>
//     )
// }

// export default UpdateExercise
import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

function UpdateExercise({onUpdateExercise}){
    const params = useParams()
    // create new exercise state
    console.log(params)
    const [UpdateExerciseData, setUpdateExerciseData] = useState({
        name: "",
        muscle_group: "",
        weight: 0,
        sets: 0,
        reps: 0,
        rest: "",
        user_id: 0
    })

//     // write and abstract change handler to update UpdateExerciseData state as user types
    function handleChange(e){
        setUpdateExerciseData({
            ...UpdateExerciseData, [e.target.id]: e.target.value
        });
        console.log(UpdateExerciseData)
    }

//     // write handle submit function and include a post fetch to 9292/exercises
    function handleSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:9292/exercises/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(UpdateExerciseData),
        })
        .then((response) => response.json())
        .then((UpdateExerciseData) => {
            onUpdateExercise(UpdateExerciseData)
            // setUpdateExerciseData("")
            console.log(UpdateExerciseData)
        })
    }

    return(
        <div>
            <h3> Update Exercise</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="UpdateExerciseData"
                    value={UpdateExerciseData}
                    onChange={(e) => setUpdateExerciseData(e.target.value)}
                />
                <label>
                    Name:
                <input
                    type="text"
                    id="edit_name"
                    // defaultValue="name"
                    defaultValue={UpdateExerciseData.name}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Muscle Group:
                <input
                    type="text"
                    id="edit_muscle_group"
                    value={UpdateExerciseData.muscle_group}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Weight:
                <input
                    type="integer"
                    id="edit_weight"
                    value={UpdateExerciseData.weight}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Sets:
                <input
                    type="integer"
                    id="edit_sets"
                    value={UpdateExerciseData.sets}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Reps:
                <input
                    type="integer"
                    id="edit_reps"
                    value={UpdateExerciseData.reps}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Rest:
                <input
                    type="text"
                    id="edit_rest"
                    value={UpdateExerciseData.rest}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    User Id:
                <input
                    type="integer"
                    id="edit_user_id"
                    value={UpdateExerciseData.user_id}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <button type="submit">Submit New Exercise</button>
            </form>
        </div>
    )
}

export default UpdateExercise