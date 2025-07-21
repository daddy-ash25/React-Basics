import React from 'react'
import { useParams } from 'react-router'

function Users() {
    const  {id} = useParams()
  return (
    <div>
      user: {id}
    </div>
  )
}

export default Users
