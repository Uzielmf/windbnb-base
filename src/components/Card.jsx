import React from 'react'

function Card(props) {
    let el = props.elemento
    let i = props.index
    

    return (
    
    <>
        <div class="" key={i}>
          <img src={el.photo} class="img-arbnb" alt="..."></img>
          <div class="">
            <p>{el.superHost ? "Super Host" : ""}</p>
            <p>{el.type}</p>
            <p><i>&</i>{el.rating}</p>
            </div>
            <div>
          <p>{el.title}</p>
          </div>
  </div>

        </>
  )
}

export default Card