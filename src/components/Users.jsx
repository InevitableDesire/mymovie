import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../redux/users'
import '../assets/styles/components/Users.scss'

const Users = () => {

  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)
  const users = useSelector(state => state.users)

  useEffect(() => {
    if(!users.length)
      dispatch(getUsers(loggedUser.token))
  }, [])

  return (
    <div className="users">
      <h2>Usuarios</h2>
      <ul>
        {users.map(user => <Link to={`/users/${user.id === loggedUser.id ? "me" : user.id}`} key={user.id} ><li>{user.name}</li></Link>)}
      </ul>
    </div>
  )
}

export default Users
