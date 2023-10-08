import React from 'react'

function Nav({FuncionSubmit}) {
  return (
    <div className='nav-container'>
        
        <div className='nav-principal'>
            <div className='name-company'><span class="material-symbols-outlined logo">home</span> NIGGABNB</div>

            <div className='buscardor'>
                <form className='form-buscador' onSubmit={FuncionSubmit}>
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
