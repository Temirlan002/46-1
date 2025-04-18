import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthStore } from "../store";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const { login } = useAuthStore()

  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleLogin = () => {
    const errMsg = login(credentials.username, credentials.password)
    
    if (errMsg) {
      alert(errMsg)
      return;
    }

    // navigate('/')
  }

  return (
    <div>
      <h2>Вход</h2>
      <Input onChange={handleChange} name="username" placeholder="Логин" />
      <Input.Password onChange={handleChange} name="password" placeholder="Пароль" />
      <Button onClick={handleLogin}>Войти</Button>
    </div>
  )
}

export default Login;