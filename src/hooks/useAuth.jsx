import api from '../utils/api'

import { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'

export default function useAuth() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function register(user,msg,type) {
    let msgText = 'Cadastro realizado com sucesso, faça login!'
    let msgType = 'success'

    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data
      })

      await authUser(data)
    } catch (error) {
      // resolving error
      msgText = error.response.data.message
      msgType = 'error'

    }

    msg(msgText)
    type(msgType)
  }

  async function login(user,msg,type) {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/users/login', user).then((response) => {
        return response.data
      })

      await authUser(data)
      navigate("/profile")
    } catch (error) {
      // tratar erro
      msgText = error.response.data.message
      msgType = 'error'
      
    }

    msg(msgText)
    type(msgType)
  }

  async function editProfile(user,formData,token,msg,type) {
    let msgType = ''
    let msgText = ''

    try {

      const data = await api
      .post(`/users/editprofile/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data
      })

      msgText = data.message
      msgType = 'success'

    } catch (error) {
      
      msgText = 'Erro, verifique se não faltam dados e as senhas são iguais!'
      msgType = 'error'
    }

    msg(msgText)
    type(msgType)
  }

  async function authUser(data) {
    setAuthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))
  }

  function logout() {
    const msgText = 'Logout realizado com sucesso!'
    const msgType = 'success'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined

    navigate("/login")
  }

  return { authenticated, loading, register, login, editProfile, logout }
}
