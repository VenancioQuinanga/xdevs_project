import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'

/* Components*/
import styles from './Home.module.css'
import Input from '../form/Input'
import form_css from '../form/Form.module.css'
import Message from '../layout/Message'

/* Hooks */
import useFlashMessage from '../../hooks/useFlashMessage'

function Home() {
  let [message, setMessage] = useState()
  let [type, setType] = useState("")
  const {getFlashMessage,cleanFlashMessage} = useFlashMessage()

  useEffect(()=>{
    let {msg,type} =  getFlashMessage()
    setMessage(msg)
    setType(type)
    setTimeout(async ()=>{
      await cleanFlashMessage()
    },7000)
  },[message])

  return (
    <section id={styles.p_3}>
      <Message 
        msg={message}
        msgType={type}
      />
      <div className={styles.home_header}>
        <h1>Seja bem-vindo á </h1>
        <h1>XDEVS</h1>
        <p>Faça parte da nossa plataforma de desenvolvedores</p>    
        <div className={form_css.startContainer}>
          <form>
            <Link to='/register'>
              <Input
              type="button"
              name="name"
              value="Get Started"
              className={form_css.getStarted}
              />
            </Link>
            <Link to='/login'>
              <Input
              type="button"
              name="name"
              value="Get SignIn"
              className={form_css.getSignIn}
              />
            </Link>
          </form>  
        </div>
      </div>
    </section>
  )
}

export default Home