import React, { useEffect, useState } from 'react'

function Two() {

    const [two,settwo] =useState("")

    useEffect(()=>{
        fetch('https://fakestoreapi.com/users')
        .then (response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        settwo(data);
        
      })
      
  }, []);
    

  return (
    <div>
      <ul>
        {two.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Two
