import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';

function UpdateExercise({exercises, onUpdateExercise}){
    const {id} = useParams()
    const history = useHistory()
    const current = exercises.find((exercise) => exercise.id === parseInt(id))
    console.log("my id is ", id, current)


    const [UpdateExerciseData, setUpdateExerciseData] = useState({
        // // name: current.name,
        // muscle_group: current.muscle_group,
        // weight: current.weight,
        // sets: current.sets,
        // reps:current.reps,
        // rest: current.rest,
        // user_id: current.user_id
    })
    // const UpdateExerciseData = 

//     // write and abstract change handler to update UpdateExerciseData state as user types
function handleChange(e){
    setUpdateExerciseData({
        ...UpdateExerciseData, [e.target.id]: e.target.value
    });
    // console.log(UpdateExerciseData)
}

//     // write handle submit function and include a post fetch to 9292/exercises
    function handleSubmit(e){
        e.preventDefault();


        fetch(`http://localhost:9292/exercises/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(UpdateExerciseData),
        })
        .then((response) => response.json())
        .then((UpdateExerciseData) => {
            
            onUpdateExercise(UpdateExerciseData)
            history.push(`/exercises/${id}`)
            // setUpdateExerciseData("")
            console.log(UpdateExerciseData, "strings")
        })
    }
// debugger
    return(
        <div>
            <h3> Update Exercise </h3>
            <form onSubmit={handleSubmit}>
                {/* <input 
                    type="text"
                    name="UpdateExerciseData"
                    value={UpdateExerciseData}
                    onChange={(e) => setUpdateExerciseData(e.target.value)}
                /> */}
                <label>
                    Name:
                <input
                    type="text"
                    id="name"
                    // defaultValue="name"
                    // defaultValue={current.name}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Muscle Group:
                <input
                    type="text"
                    id="muscle_group"
                    // defaultValue={current.muscle_group}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Weight:
                <input
                    type="integer"
                    id="weight"
                    // defaultValue={current.weight}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Sets:
                <input
                    type="integer"
                    id="sets"
                    // defaultValue={current.sets}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Reps:
                <input
                    type="integer"
                    id="reps"
                    // defaultValue={current.reps}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Rest:
                <input
                    type="text"
                    id="rest"
                    // defaultValue={current.rest}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    User Id:
                <input
                    type="integer"
                    id="user_id"
                    // defaultValue={current.user_id}
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



// ==========================================


// import React from "react";
// import { useParams } from "react-router-dom";

// function UpdateExercise({exercises}){
//     // const params = useParams()
//     // const current = exercises
//     const params = useParams()
//     return(
//         <div>
//             <h3>Update Exercise component</h3>
//             <h5>my id is</h5>
//             {/* <h5>my name is {exercises.id}</h5> */}
//         </div>
//     )
// }

// export default UpdateExercise
