import React from 'react'

export const Regularbtn = ({btntext,handlefuntion,bgcolor}) => {
  // let []
  return (
    <a href="#" onClick={handlefuntion} style={{background:bgcolor, color:'white',margin:"40px 20px 0" }} class="btn  animation">{btntext}</a>
  )
}
