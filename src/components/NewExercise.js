import React, {useState, useHistory} from 'react'

function NewExercise({onAddExercise}){
    // create new exercise state
    // const history = useHistory()
    const [newExerciseData, setNewExerciseData] = useState({
        name: "",
        muscle_group: "",
        weight: 0,
        sets: 0,
        reps: 0,
        rest: "",
        user_id: 0
    })

    // write and abstract change handler to update newExerciseData state as user types
    function handleChange(e){
        setNewExerciseData({
            ...newExerciseData, [e.target.id]: e.target.value
        });
        console.log(newExerciseData)
    }

    // write handle submit function and include a post fetch to 9292/exercises
    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newExerciseData),
        })
        .then((response) => response.json())
        .then((newExerciseData) => {
            onAddExercise(newExerciseData)
            setNewExerciseData({
                name: "",
                muscle_group: "",
                weight: 0,
                sets: 0,
                reps: 0,
                rest: "",
                user_id: 0        
            })
            console.log(newExerciseData)
            // history.push(`/exercises/${id}`)
        })
    }
    return(
        <div>
            <h3>Add New Exercise</h3>
            <form onSubmit={handleSubmit}>
                {/* <input 
                    type="text"
                    name="newExerciseData"
                    value={newExerciseData}
                    onChange={(e) => setNewExerciseData(e.target.value)}
                /> */}
                <label>
                    Name:
                <input
                    type="text"
                    id="name"
                    // defaultValue="name"
                    value={newExerciseData.name}
                    onChange={handleChange}
                />
                </label>
                <br></br>
                <label>
                    Muscle Group:
                <input
                    type="text"
                    id="muscle_group"
                    value={newExerciseData.muscle_group}
                    onChange={handleChange}
                />
                </label><br></br>
                <label>
                    Weight:
                <input
                    type="integer"
                    id="weight"
                    value={newExerciseData.weight}
                    onChange={handleChange}
                />
                </label><br></br>
                <label>
                    Sets:
                <input
                    type="integer"
                    id="sets"
                    value={newExerciseData.sets}
                    onChange={handleChange}
                />
                </label><br></br>
                <label>
                    Reps:
                <input
                    type="integer"
                    id="reps"
                    value={newExerciseData.reps}
                    onChange={handleChange}
                />
                </label><br></br>
                <label>
                    Rest:
                <input
                    type="text"
                    id="rest"
                    value={newExerciseData.rest}
                    onChange={handleChange}
                />
                </label><br></br>
                <label>
                    User Id:
                <input
                    type="integer"
                    id="user_id"
                    value={newExerciseData.user_id}
                    onChange={handleChange}
                />
                </label><br></br>
                <button type="submit">Submit New Exercise</button>
            </form>
        </div>
    )
}

export default NewExercise