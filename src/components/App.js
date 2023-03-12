import React, {useState, useEffect} from 'react'
import '../App.css';
import {Switch, Route} from "react-router-dom"
import UsersList from './UsersList';
import NewUser from './NewUser';
import ExercisesList from './ExercisesList';
import NewExercise from './NewExercise';
import Navbar from './Navbar';
import Home from './Home';
import UpdateExercise from './UpdateExercise';
import Exercise from './Exercise';

function App() {
  // create STATES
  const [users, setUsers] = useState([])
  const [exercisesState, setExercisesState] = useState([])
  
  // fetch GETs for state
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
    }, [])

  useEffect(() => {
    fetch("http://localhost:9292/exercises")
      .then((response) => response.json())
      .then((exercisesState) => setExercisesState(exercisesState));
  }, [])

  // build HANDLERs for state updates

    // write state setter to filter users array upon user deletion, start with a console.log
    function handleDeleteUser(id){
      console.log(`I am in App, in handleDeleteUser, with an id of ${id}`)
      // write actual state setter, filter users state
      const usersAfterDelete = users.filter((user) => user.id !== id)
      setUsers(usersAfterDelete)
    }

    function handleDeleteExercise(id){
      // setExercisesState(exercisesAfterDelete)
      console.log(`I am in App.js, in handleDeleteExercise, with an ID of ${id}`)
      // write exercises filtering then set state
      const exercisesAfterDelete = exercisesState.filter((exerciseState) => exerciseState.id !== id)
      setExercisesState(exercisesAfterDelete)
    }

    function handleAddUser(newUserName){
      // console.log("im adding a new new user")
      setUsers([...users, newUserName])
    }

    function handleAddExercise(newExerciseName){
      setExercisesState([...exercisesState, newExerciseName])
    }

    function handleUpdateExercise(){
      console.log("upadate me in app!")
    }
    

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/users/new'>
          <NewUser onAddUser={handleAddUser}/>
        </Route>
        <Route path='/exercises/new'>
          <NewExercise onAddExercise={handleAddExercise}/>
        </Route>
        <Route path='/users'>
          <UsersList 
            users={users}
            onDeleteUser={handleDeleteUser}
            onDeleteExercise={handleDeleteExercise}
            exercisesState={exercisesState}
          />
        </Route>
        <Route exact path='/exercises'>
          <ExercisesList 
            users={users}
            exercisesState={exercisesState}
            onDeleteExercise={handleDeleteExercise}
            onUpdateExercise={handleUpdateExercise}
          />
        </Route>
        <Route path="/exercises/:id">
          <UpdateExercise 
            exercisesState={exercisesState}
            onUpdateExercise={handleUpdateExercise}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
