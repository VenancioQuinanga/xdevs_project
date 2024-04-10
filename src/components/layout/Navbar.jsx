import {React} from 'react'
import styles from './Navbar.module.css'
import { Link,useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

function Navbar() {
  const {logout} = useAuth()
  const navigate = useNavigate()

  function doLogout() {
    logout()
    navigate('/login')
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <h2>XDEVS</h2>
      </div>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile">
            Perfil
          </Link>
        </li>
        <li>
          <Link to="/register">
            Registrar
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link to="#" onClick={doLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
