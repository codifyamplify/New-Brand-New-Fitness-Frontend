import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  // create state for master users database state
  const [users, setUsers] = useState([])
  // write fetch request to 9292
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
    }, [])
  return (
    <div className="App">
      {/* className="App-header" for dark blue background */}
      <h1>Brand New Fitness App</h1>
    </div>
  );
}

export default App;
