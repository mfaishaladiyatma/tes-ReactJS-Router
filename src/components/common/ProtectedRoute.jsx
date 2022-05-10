import { Outlet, Navigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

export default function ProtectedRoute() {
    const storage = window.localStorage
    const token = storage.getItem('token')
    const decode = token ? jwtDecode(token) : {}
    console.table(decode)
    console.log(decode.exp)
    console.log(Date.now() /1000)
    const isLoggedIn = decode.exp > (Date.now() /1000)

    if(isLoggedIn){
        return <Outlet />
    }

  return (
    <Navigate to={'/login'}></Navigate>
  )
}
