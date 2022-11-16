import React from 'react'
import { Outlet } from "react-router-dom";


function Users() {
  return (
    <div>
        Kullanıcılar

        <ul>
            <li>
                <a href='users/mami'>mami hakkında</a>
            </li>
            <li>
                <a href='/'>ibo hakkında</a>
            </li>
            <li>
                <a href='/'>esil hakkında</a>
            </li>
        </ul>
    <Outlet />
    </div>

  )
}

export default Users
