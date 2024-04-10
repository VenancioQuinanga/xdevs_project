import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/* components */
import styles from './Profile.module.css'
import EditProfileForm from '../../form/EditProfileForm'
import RoundedImage from '../../layout/RoundedImage'
import Message from '../../layout/Message'

/* Hooks */
import useAuth from '../../../hooks/useAuth'
import useFlashMessage from '../../../hooks/useFlashMessage'

function Profile() {
  const [user, setUser] = useState({})
  const [preview, setPreview] = useState()
  const [token] = useState(localStorage.getItem('token') || '')
  const XDEVS_API = useState('http://localhost:5000')
  let [message, setMessage] = useState()
  let [type, setType] = useState("")
  const {setFlashMessage} = useFlashMessage()
  const {editProfile} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if (!token) {
     let msg ='Você não está autenticado, faça login!'
     let type = 'error'
     setFlashMessage(msg,type)
     navigate('/')
    }else{
     api
      .get('/users/checkuser', {
       headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
       },
      })
      .then((response) => {
       setUser(response.data.user)
      })
    }
  },[message,token])

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function fileChange(e) {
    setPreview(e.target.files[0])
    setUser({ ...user, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    const userFormData = await Object.keys(user).forEach((key) =>
      formData.append(key, user[key]),
    )

    formData.append('user', userFormData)

    console.log(formData)
    editProfile(user,formData,token,setMessage,setType)
  }

  return (
    <>
      <section>
        <Message 
          msg={message}
          msgType={type}
        />
        <div className={styles.profile_header}>
          <h1>Perfil</h1>
          {(user.image || preview) && (
            <RoundedImage
              src={
                preview
                  ? URL.createObjectURL(preview)
                  : `${XDEVS_API}/public/img/users/${user.image}`
              }
              alt={user.image}
            />
          )}
        </div>
        <EditProfileForm
          user={user}
          onHandleSubmit={handleSubmit}
          onHandleChange={handleChange}
          onFileChange={fileChange}
        />
      </section>
    </>
  )
}

export default Profile
