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
import UpdateX from './UpdateX';

function App() {
  // create STATES
  const [users, setUsers] = useState([])
  const [exercises, setExercises] = useState([])
  
  // fetch GETs for state
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
    }, [])

  useEffect(() => {
    fetch("http://localhost:9292/exercises")
      .then((response) => response.json())
      .then((exercises) => setExercises(exercises));
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
      // setExercises(exercisesAfterDelete)
      console.log(`I am in App.js, in handleDeleteExercise, with an ID of ${id}`)
      // write exercises filtering then set state
      const exercisesAfterDelete = exercises.filter((exercise) => exercise.id !== id)
      setExercises(exercisesAfterDelete)
    }

    function handleAddUser(newUserName){
      // console.log("im adding a new new user")
      setUsers([...users, newUserName])
    }

    function handleAddExercise(newExerciseName){
      setExercises([...exercises, newExerciseName])
    }

    function handleUpdateExercise(){
      console.log("upadate me in app!")
    }


    // const handleUpdateExercise = (updatedExercise) => {
    //   const updatedExercises = exercises.map((exercise) => (exercise.id === updatedExercise.id ? updatedexercise : exercise))
    //   setExercises(updatedExercises);
    // }
    

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
            exercises={exercises}
          />
        </Route>
        <Route exact path='/exercises'>
          <ExercisesList 
            users={users}
            exercises={exercises}
            onDeleteExercise={handleDeleteExercise}
            onUpdateExercise={handleUpdateExercise}
          />
        </Route>
        <Route exact path='/exercises/:id'>
          <Exercise 
            users={users}
            exercises={exercises}
            onDeleteExercise={handleDeleteExercise}
            onUpdateExercise={handleUpdateExercise}
          />
        </Route>

        <Route path="/exercises/:id/edit">
          {/* <UpdateExercise 
            exercises={exercises}
            onUpdateExercise={handleUpdateExercise}
          /> */}
          <UpdateX
            exercises={exercises}
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
