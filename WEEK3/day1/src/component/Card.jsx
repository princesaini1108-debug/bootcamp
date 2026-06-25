import React from 'react'

const Card = (props) => {
    
  return (
    <div>
        <img src={props.image}/>
        <h1>Name:{props.name}</h1>
        <h2>Id:{props.id}</h2>
        <p>Hobby:{props.hobby[0]}</p>
        <button>{props.text}</button>
    </div>
  )
}

export default Card