import { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Input from '../../form/Input'
import home_css from './../Home.module.css'
import styles from '../../form/Form.module.css'
import Message from '../../layout/Message'

//hooks
import useAuth from '../../../hooks/useAuth'

function Login() {
  const [user, setUser] = useState({})
  let [message, setMessage] = useState()
  let [type, setType] = useState("")
  const { login} = useAuth()

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    login(user,setMessage,setType)
  }

  return (
    <>
      <section className={styles.form_container} id={home_css.p_3}>
        <Message 
          msg={message}
          msgType={type}
        />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            event={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite a senha"
            event={handleChange}
          />
          <input type="submit" value="Entrar" />
        </form>
        <p>
          Não tem conta? <Link to="/register">Clique aqui.</Link>
        </p>
      </section>
    </>
  )
}

export default Login
