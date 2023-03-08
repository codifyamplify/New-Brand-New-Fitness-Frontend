import React, {useState} from 'react'

function NewExercise({onAddExercise}){
    // create new exercise state
    const [newExerciseName, setNewExerciseName] = useState("")
    // write handle submit function and include a post fetch to 9292/exercises
    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: newExerciseName,
            }),
        })
        .then((response) => response.json())
        .then((newExerciseName) => {
            onAddExercise(newExerciseName)
            setNewExerciseName("")
            console.log(newExerciseName)
        })
    }
    return(
        <div>
            <h3>Add New Exercise</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="newExerciseName"
                    value={newExerciseName}
                    onChange={(e) => setNewExerciseName(e.target.value)}
                />
                <button type="submit">Submit New Exercise</button>
            </form>
        </div>
    )
}

export default NewExercise