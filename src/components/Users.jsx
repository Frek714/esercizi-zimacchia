import React, { useEffect } from 'react'
import { useCallUsers } from '../hooks/useCallUsers'

export const Users = () => {

  // const users = useCallUsers()
  const {getUsers, users} = useCallUsers()

  useEffect(() => {
   getUsers()
  }, [])

  return (
    <div>
      {
        users.map((user, index) => {
          return <p key={index}>{user.name}</p>
        })
      }
    </div>
  )
}
