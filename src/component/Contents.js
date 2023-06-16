import React from 'react'
import { Regularbtn } from './Regularbtn'

const Contents = () => {
  return (<>
    <div class="content">
            <h1 class="animation">Make <br/>New Friends</h1>
            <p class="animation">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Laborum veniam illo nam vero nulla odio necessitatibus doloremque. 
                 Nobis sequi ex expedita, aperiam deserunt hic!</p>
                 <Regularbtn btntext = "Join Now"/>
                 
    </div>
    
        <img src={require("./images/pic.png")} class="Model  animation" alt="img"/>
    </>
    
  )
}

export default Contents