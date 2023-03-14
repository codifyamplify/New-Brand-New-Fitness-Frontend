import React, {useState} from 'react'

function NewExercise({onAddExercise}){
    const [newExerciseData, setNewExerciseData] = useState({
        name: "",
        muscle_group: "",
        weight: 0,
        sets: 0,
        reps: 0,
        rest: "",
        user_id: 0
    })

    function handleChange(e){
        setNewExerciseData({
            ...newExerciseData, [e.target.id]: e.target.value
        });
    }

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
        })
    }
    return(
        <div>
            <h3>Add New Exercise</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                <input
                    type="text"
                    id="name"
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