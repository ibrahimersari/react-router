import React from 'react'
import { Outlet } from "react-router-dom";


function Users() {
  return (
    <div>
        Kullanıcılar

        <ul>
            <li>
                <a href='users/serkan'>Serkan hakkında bilgi almak için tıklayın</a>
            </li>
            <li>
                <a href='/'>Ömer hakkında bilgi almak için tıklayın</a>
            </li>
            <li>
                <a href='/'>Hasan hakkında bilgi almak için tıklayın</a>
            </li>
        </ul>
    <Outlet />
    </div>

  )
}

export default Users
