import React from 'react'

const SingleProducts = ({product}) => {
    const {id,title,description,price,thumbnail}=product
    console.log(title);
  return (

        <div class="box">
                <div class="box-img">
                    <img src={thumbnail} alt=""/>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <button ><a href="#" class="btnorder">Price :{price}</a></button>
        </div>

  )
}

export default SingleProducts