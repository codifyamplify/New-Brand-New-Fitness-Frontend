import React, {useState, useEffect} from 'react'
import '../App.css';
// import UserCard from './UserCard';
import UsersList from './UsersList';
import NewUser from './NewUser';

function App() {
  // create state for master users database state
  const [users, setUsers] = useState([])
  // write fetch request to 9292
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
    }, [])
    // write state setter to filter users array upon user deletion, start with a console.log
    function handleDeleteUser(id){
      console.log(`I am in App, in handleDeleteUser, with an id of ${id}`)
      // write actual state setter, filter users state
      const usersAfterDelete = users.filter((user) => user.id !== id)
      setUsers(usersAfterDelete)
    }

    function handleAddUser(newUserName){
      // console.log("im adding a new new user")
      setUsers([...users, newUserName])
    }

  return (
    <div className="App">
      {/* className="App-header" for dark blue background */}
      <h1>Brand New Fitness App</h1>
      <NewUser onAddUser={handleAddUser}/>
      <UsersList 
        users={users}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default App;
