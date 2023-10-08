import React from 'react'

function Nav() {
  return (
    <div className='nav-container'>
        
        <div className='nav-principal'>
            <div className='name-company'><span class="material-symbols-outlined logo">home</span> windbnb</div>

            <div className='buscardor'>
                <form className='form-buscador'>
                <input type="text" placeholder=' Lugar'/>
                <input type="text" placeholder=' Add guests'/>
                <button type='submit'><span class="material-symbols-outlined lupa" >
search
</span></button>
                </form>
            </div>
        </div>

        <div className='nav-information'>
            <h1>Stays in Finland</h1>
            <small># huspedes</small>
        </div>
    </div>
  )
}

export default Nav
