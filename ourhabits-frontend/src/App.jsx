import { useState } from 'react'
import './App.css'
import { loginRequest, registerRequest } from './api'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      if (isRegister) {
        await registerRequest(email, password)
        setMessage('Registro exitoso, ahora puedes iniciar sesión.')
        setIsRegister(false)
      } else {
        const data = await loginRequest(email, password)
        localStorage.setItem('token', data.token)
        setMessage('Sesión iniciada correctamente.')
      }
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="container">
      <h1>{isRegister ? 'Registro' : 'Login'}</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegister ? 'Registrarse' : 'Iniciar sesión'}</button>
      </form>
      <button className="toggle" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default App
