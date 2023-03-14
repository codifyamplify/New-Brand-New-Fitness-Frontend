import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'

const UpdateExercise = ({users, exercises, handleUpdateExercise}) => {
  const {id} = useParams()
  const history = useHistory()
  const current = exercises.find(exercise => exercise.id === parseInt(id))
  const currentUser = users.find(user => user.id === current.user_id)

  const [updatedName, setUpdatedName] = useState(current.name)
  const [updatedMuscleGroup, setUpdatedMuscleGroup] = useState(current.muscle_group)
  const [updatedWeight, setUpdatedWeight] = useState(current.weight)
  const [updatedSets, setUpdatedSets] = useState(current.sets)
  const [updatedReps, setUpdatedReps] = useState(current.reps)
  const [updatedRest, setUpdatedRest] = useState(current.rest)
  const [updatedUserId, setUpdatedUserId] = useState(current.user_id)

  function handleSubmit(e){
    e.preventDefault()
    const updatedExerciseData = {
      updatedName,
      updatedMuscleGroup,
      updatedWeight,
      updatedSets,
      updatedReps,
      updatedRest,
      updatedUserId
    }
    fetch(`http://localhost:9292/exercises/${current.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedExerciseData),
    })
      .then((response) => response.json())
      .then((updatedExercise) => {
          handleUpdateExercise(updatedExercise)
          history.push(`/exercises/${id}`)
    })
  }
  return (
    <div>
      <h1>Update Exercise Form</h1>
      <form onSubmit={handleSubmit}>
      <label>
          User Name:
          <span>
            {currentUser.name}
          </span>
        </label><br></br>
        <label>
          Name:
          <input
            type="text"
            name="name"
            defaultValue={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </label><br></br>
        <label>
          Muscle Group:
          <input
            type="text"
            defaultValue={updatedMuscleGroup}
            onChange={(e) => setUpdatedMuscleGroup(e.target.value)}
          />
        </label><br></br>
        <label>
          Weight:
          <input
            type="integer"
            defaultValue={updatedWeight}
            onChange={(e) => setUpdatedWeight(e.target.value)}
          />
        </label><br></br>
        <label>
          Sets:
          <input
            type="integer"
            defaultValue={updatedSets}
            onChange={(e) => setUpdatedSets(e.target.value)}
          />
        </label><br></br>
        <label>
          Reps:
          <input
            type="integer"
            defaultValue={updatedReps}
            onChange={(e) => setUpdatedReps(e.target.value)}
          />
        </label><br></br>
        <label>
          Rest:
          <input
            type="text"
            defaultValue={updatedReps}
            onChange={(e) => setUpdatedRest(e.target.value)}
          />
        </label><br></br>
        <label>
          User Id:
          <input
            type="integer"
            defaultValue={updatedUserId}
            onChange={(e) => setUpdatedUserId(e.target.value)}
          />
        </label><br></br>
        <button type="submit">Submit Updated Exercise</button>

      </form>
    </div>
  )
}

export default UpdateExercise