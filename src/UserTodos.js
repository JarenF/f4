import React, { useEffect, useState } from "react";

function UserTodos({userId}) {
  const [todos, setToDos] = useState([]);
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  
  .then((response) => response.json())
  .then(setToDos)
  .catch((error)=>{
      console.log(error)
    })
  },[userId])
  
  return (
    <div>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
      ))}
    </div>
  )
}


            
            

export default UserTodos;
