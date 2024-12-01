import React from 'react'
import { Alert } from 'react-bootstrap'
const Message = ( {variant, children}) => {
  return (
    <Alert variant={variant}>
        {children}
    </Alert>
  )
}

Message.deafultProps = {
    variant: 'info'
}

export default Message