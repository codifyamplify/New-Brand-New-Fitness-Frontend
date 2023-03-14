import React, {useState, useEffect} from 'react'
import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import UsersList from './UsersList';
import ExercisesList from './ExercisesList';
import NewUser from './NewUser';
import NewExercise from './NewExercise';
import ExerciseCard from './ExerciseCard';
import ExerciseDetails from './ExerciseDetails';
import UpdateExercise from './UpdateExercise';
import {Switch, Route} from "react-router-dom"

function App() {
  const [users, setUsers] = useState([])
  const [exercises, setExercises] = useState([])
  
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

    function handleDeleteUser(id){
      console.log(`I am in App, in handleDeleteUser, with an id of ${id}`)
      const usersAfterDelete = users.filter((user) => user.id !== id)
      setUsers(usersAfterDelete)
    }
    function handleDeleteExercise(id){
      const exercisesAfterDelete = exercises.filter((exercise) => exercise.id !== id)
      setExercises(exercisesAfterDelete)
    }
    function handleAddUser(newUserName){
      setUsers([...users, newUserName])
    }
    function handleAddExercise(newExerciseName){
      setExercises([...exercises, newExerciseName])
    }
    const handleUpdateExercise = (updatedExercise) => {
      const updatedExercises = exercises.map((exercise) => (exercise.id === updatedExercise.id ? updatedExercise : exercise))
      setExercises(updatedExercises);
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
            exercises={exercises}
          />
        </Route>

        <Route exact path='/exercises'>
          <ExercisesList 
            users={users}
            exercises={exercises}
            onDeleteExercise={handleDeleteExercise}
          />
        </Route>

        <Route path="/exercises/:id/edit">
          <UpdateExercise
            exercises={exercises}
            users={users}
            handleUpdateExercise={handleUpdateExercise}
          />
        </Route>


        <Route path="/exercises/:id">
          <ExerciseDetails
            exercises={exercises}
          />
        </Route>

        <Route path='/exercises/:id'>
          <ExerciseCard 
            users={users}
            exercises={exercises}
            onDeleteExercise={handleDeleteExercise}
            handleUpdateExercise={handleUpdateExercise}
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
