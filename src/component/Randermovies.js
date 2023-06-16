import React from 'react'
import Movies from '../moviesdata/Movies.json'
import Singlemovies from './Singlemovies'

const Randermovies = () => {
    
  return (
    <>
       <section class="gallery" id="categories">
        
            <div class="center-text">
                {/* <h2>Movies</h2> */}
            </div>
            <span class="error"></span>
                <div class="gallery-content">

                        {
                            Movies.map((element, index)=>{
                                return <Singlemovies  key ={index} detailsmovie={element}/>
                            })
                        }
                </div>
       </section>
    </>
  )
}

export default Randermovies