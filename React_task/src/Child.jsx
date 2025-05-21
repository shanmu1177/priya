import React from 'react'

function Child({login}) {
  // console.log({users})
  return (
    <>
    <div>
         {login.map((user) => (
                 <ul key={user.id}>
                     <li>{user.Name}</li>
                     <li>{user.Age}</li>
                 </ul>
         ))}
    </div>
    </>

  )
}

export default Child