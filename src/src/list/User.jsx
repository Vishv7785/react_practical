import React from 'react'

function User() {

    const user =[
        {
            id : 1,
            name : 'vishv'
        },
         {
            id : 2,
            name : 'rudra'
        },
         {
            id : 3,
            name : 'harshil'
        }
    ]
    console.log(user);
    

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            user.map(user =>(
                <li key={user.id}>
                    {user.name}
                </li>
            ))
        }
      </ul>
    </div>
  );
}

export default User
