import React from 'react'

const UnregisterShortcut = ({title, handleUnregister}) => {
  return (
    <button onClick={handleUnregister}>Unregister - {title}</button>
  )
}

export default UnregisterShortcut