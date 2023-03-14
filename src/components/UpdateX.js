import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const UpdateX = ({exercises}) => {
  const {id} = useParams()
//   const current = exercises.find((exercise) => exercise.id === parseInt(id))
// console.log({current})

const current = exercises.find(exercise => exercise.id === parseInt(id))
// console.log(exercises)
console.log(parseInt(current.weight))


  const [updatedName, setUpdatedName] = useState({
    name: "",
  })
  const [updatedMuscleGroup, setUpdatedMuscleGroup] = useState({
    muscle_group: "",
  })
  const [updatedWeight, setUpdatedWeight] = useState({
    weight: 0,
  })
  const [updatedSets, setUpdatedSets] = useState({
    sets: 0,
  })
  const [updatedReps, setUpdatedReps] = useState({
    reps: 0,
  })
  const [updatedRest, setUpdatedRest] = useState({
    rest: "",
  })
  const [updatedUserId, setUpdatedUserId] = useState({
    user_id: 0,
  })

  function handleChangeName(e){
    setUpdatedName({
      ...updatedName, name: e.target.value
    })
    console.log(e.target.value)
  }
  function handleChangeMuscleGroup(e){
    setUpdatedMuscleGroup({
      ...updatedMuscleGroup, muscle_group: e.target.value
    })
    console.log(e.target.value)
  }
  function handleChangeWeight(e){
    setUpdatedWeight({
      ...updatedWeight, weight: e.target.value
    })
    console.log(e.target.value)
  }
  function handleChangeSets(e){
    setUpdatedSets({
      ...updatedSets, sets: e.target.value
    })
    console.log(e.target.value)
  }
  function handleChangeReps(e){
    setUpdatedReps({
      ...updatedReps, reps: e.target.value
    })
    console.log(e.target.value)
  }
  function handleChangeRest(e){
    setUpdatedRest({
      ...updatedRest, rest: e.target.value
    })
    console.log(e.target.value)
  }
  function handleChangeUserId(e){
    setUpdatedUserId({
      ...updatedUserId, user_id: e.target.value
    })
    console.log(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(updatedName, updatedMuscleGroup, updatedWeight, updatedSets, updatedReps, updatedRest, updatedUserId)

  }
  
  return (
    <div>
      <h1>UpdateX for {current.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            defaultValue={updatedName.name}
            placeholder={current.name}
            onChange={handleChangeName}
          />
        </label>
        <br></br>
        <label>
          Muscle Group:
          <input
            type="text"
            name="muscle_group"
            defaultValue={updatedMuscleGroup.muscle_group}
            placeholder={current.muscle_group}
            onChange={handleChangeMuscleGroup}
          />
        </label>
        <br></br>
        <label>
          Weight:
          <input
            type="integer"
            name="weight"
            defaultValue={updatedWeight.weight}
            // placeholder={current.weight}
            onChange={handleChangeWeight}
          />
        </label>

        <br></br>
        <label>
          Sets:
          <input
            type="integer"
            name="sets"
            defaultValue={updatedSets.sets}
            // placeholder={current.sets}
            onChange={handleChangeSets}
          />
        </label>

        <br></br>
        <label>
          Reps:
          <input
            type="integer"
            name="reps"
            defaultValue={updatedReps.reps}
            // placeholder={current.reps}
            onChange={handleChangeReps}
          />
        </label>

        <br></br>
        <label>
          Rest:
          <input
            type="text"
            name="rest"
            defaultValue={updatedRest.rest}
            placeholder={current.rest}
            onChange={handleChangeRest}
          />
        </label>
        <br></br>


        <label>
          User Id:
          <input
            type="integer"
            name="user_id"
            defaultValue={updatedUserId.user_id}
            // placeholder={current.user_id}
            onChange={handleChangeUserId}
          />
        </label>
        <br></br>
        <button type="submit">Submit Updated Exercise</button>

      </form>
    </div>
  )
}

export default UpdateX