import React from 'react'
import Button from './Button'
import Input from './Input'
import './TelaLogin.css'

const TelaLogin = () => {
  return (
    <div className='tela'>
        <h1>Login</h1>
      <Input label="Email" placeholder="Digete o seu Email"/>
      <Input label="Senha" placeholder="Informe sua Senha"/>
      <Button />
    </div>
  )
}

export default TelaLogin
