import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {
        users.map((user, index) =>(
        <div key={user.id}>
            <h3 onClick={()=> setCurrentIndex(index)}>{user.name}</h3>
            {currentIndex === index && <UserTodos userId={user.id}/>}
        </div>
      ))}
      
      
    </div>
  );
}

export default App;