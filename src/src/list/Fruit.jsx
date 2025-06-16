
import React from 'react'


function Fruit() {

    const Fruits = [banana, apple, kiwi, chikoo];


  return (
    <div>
      <ul>
        {
            Fruits.map((Fruits,index) => 
                <li key={index}>
                 <h2>  {Fruits.name} </h2> 
                </li>
            
            )
        }
      </ul>
    </div>
  )
}

export default Fruit
