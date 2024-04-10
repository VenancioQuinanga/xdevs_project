import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../form/Input'
import styles from '../../form/Form.module.css'
import Message from '../../layout/Message'

//hooks
import useAuth from '../../../hooks/useAuth'

function Register() {
  const [user, setUser] = useState({})
  const { register } = useAuth()
  let [message, setMessage] = useState()
  let [type, setType] = useState("")

  const handleChange = (e)=>{
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function Submit(e) {
    e.preventDefault()
    register(user,setMessage,setType)
  }

  return (
    <>
      <Message 
          msg={message}
          msgType={type}
        />
      <section className={styles.form_container}>
        <h1>Registrar</h1>
        <form onSubmit={Submit} className={styles.form_container}>
          <Input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            event={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            event={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite a sua senha"
            event={handleChange}
          />
          <Input
            type="password"
            name="confirmpassword"
            placeholder="Confirme a sua senha"
            event={handleChange}
          />
          <input type="submit" value="Cadastrar" />
        </form>
        <p>
          Já tem conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </section>
    </>
    
  )
}

export default Register
