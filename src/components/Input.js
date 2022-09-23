import React from 'react'

const Input = ({label, placeholder}) => {
  return (
    <div>
        <label htmlFor=''>{label}</label>
        <input type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Input
