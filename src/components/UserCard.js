import React from "react";

function UserCard({user, onDeleteUser}){
    // write delete user handler - this will be the fetch request NOT the state update
    function handleDeleteClick(){
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "DELETE",
        });
        // state setter prop goes here
        // console.log(`${user.name} was deleted`)
        onDeleteUser(user.id)
    }
    // const {name} = user.name
    // console.log("from card")
    // const exercises = user.exercises.map((exercise) => <li key={exercise.id}>{JSON.stringify(exercise)}</li>)
    
    return (
        <div className="UserCard">
            <h3>User: {user.name}</h3>
            {/* <h4>user name: {user.name}</h4> */}
            {/* create table for exercise info */}
            <table className="Table">
                <tr>
                    <th>Name</th>
                    <th>Muscle Group</th>
                    <th>Weight</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Rest</th>
                </tr>
            {/* map over exercise object and populate table */}
        {user.exercises.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.muscle_group}</td>
              <td>{val.weight}</td>
              <td>{val.sets}</td>
              <td>{val.reps}</td>
              <td>{val.rest}</td>
            </tr>
          )
        })}
      </table>
            {/* <ul>{exercises}</ul> */}
            <button onClick={handleDeleteClick}>Delete User</button>
        </div>
    )
}

export default UserCard