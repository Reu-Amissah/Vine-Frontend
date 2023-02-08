import React from 'react'

const Button = ({title}) => {
  return (
    <div style={buttonStyles}>{title}</div>
  )
}

const buttonStyles = {
  fontSize: "14px"
}

export default Button