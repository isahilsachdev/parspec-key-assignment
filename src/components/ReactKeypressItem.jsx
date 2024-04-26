import React, { useEffect, useState } from 'react'
import UnregisterShortcut from './UnregisterShortcut'
import '../App.css';

const ReactKeypressItem = ({listener, shortcut, title, handleActiveShortcuts}) => {
  const [isUnmount, setIsunmount] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle);
  };

  useEffect(() => {
    listener.simple_combo(shortcut, handleToggle);

    return () => {
      listener.unregister_combo(shortcut);
    };
  }, [listener, shortcut]);

  const handleUnregister = () => {
    listener.unregister_combo(shortcut);
    setIsunmount(true);
    handleActiveShortcuts(shortcut, title)
  }

  return (
    <>
      {
        !isUnmount && (
          <div className={toggle ? 'keypress-active' : 'keypress-inactive'} onClick={handleToggle}>
            {title}
            {" "}
            {toggle ? "toggled" : "not toggled"}
            {" "}
            <UnregisterShortcut title={title} handleUnregister={handleUnregister} />
          </div>
        ) 
      }
    </>
  )
}

export default ReactKeypressItem