import React from 'react'
import "./card.css/"

function Card(props) {
    let el = props.elemento
    let i = props.index


    return (
    
    <>
        <div class="card-container" key={i}>
          <img src={el.photo} class="img-arbnb" alt="..."></img>
          <div class="container-info">
            {el.superHost ? <p className='super-Host'>SUPER HOST</p> : ""}
            
            {el.beds == null ? <p>{el.type}</p> : <p>{el.type}. {el.beds} beds</p>}
            
            <p className='raiting'><span class="material-symbols-outlined star">
stars
</span>{el.rating}</p>
            </div>
            <div>
          <p>{el.title}</p>
          </div>
  </div>

        </>
  )
}

export default Card