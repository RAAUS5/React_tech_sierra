import React from 'react'
import { NavLink } from 'react-router-dom'
const Singlemovies = ({detailsmovie}) => {
    const { cardimg, h3cards,pcards,button,buttonlink } = detailsmovie;
  return (
    <>
       
          <div class="box">
                <div class="box-img">
                    <img src={cardimg} alt=""/>
                </div>
                <h3>{h3cards}</h3>
                <p>{pcards}</p>
                <NavLink to={buttonlink}><button>  {button}    </button></NavLink>
                

            </div>
         
    </>
    
  )
}

export default Singlemovies