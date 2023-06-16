import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const param = useParams()
  return (
    <div> User Id IS :{param.id}</div>
  )
}

export default User