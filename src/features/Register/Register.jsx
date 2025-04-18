import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthStore } from "../store";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { register } = useAuthStore()

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  } 

  const handleRegister = () => {
    const errMsg = register(userData)
    if (errMsg) {
      setError(errMsg)
    }
    navigate('/login')
  }  

  return (
    <div>
      <h2>Регистрация</h2>
      <Input onChange={handleChange} name="username" placeholder="введите имя пользователя" />
      <Input onChange={handleChange} name="email" placeholder="введите вашу почту" />
      <Input.Password onChange={handleChange} name="password" placeholder="Введите пароль" />
      <Button onClick={handleRegister}>Зарегистрироваться</Button>
    </div>
  )
}

export default Register;