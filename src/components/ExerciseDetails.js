import React from 'react'
import { useParams } from 'react-router-dom'
// display an individual exercise card on redirect
const ExerciseDetails = ({exercises}) => {
  const {id} = useParams()
  // const current = exercises.find((exercise) => exercise.id === params)
  const current = exercises.find(exercise => exercise.id === parseInt(id))
// console.log(exercises)
// console.log(id)
console.log(current.name)
  return (
    <div>
      <h1>ExerciseDetails READ ONLY for {id}</h1>
        <ul className="ExerciseInstance">
            <li>Name: {current.name}</li>
            <br></br>
            <li>Muscle Group: {current.muscle_group}</li>
            <br></br>
            <li>Weight: {current.weight}</li>
            <br></br>
            <li>Sets: {current.sets}</li>
            <br></br>
            <li>Reps: {current.reps}</li>
            <br></br>
            <li>Rest: {current.rest}</li>
            <br></br>
            <li>User-Id: {current.user_id}</li>
            <br></br>
            <li>Exercise-Id: {current.id}</li>
        </ul>

    </div>
  )
}

export default ExerciseDetails