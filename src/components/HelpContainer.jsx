import React from 'react'
import "../App.js"

const HelpContainer = ({activeShortcuts}) => {
  return (
    <div className='helpcenter'>
      {
        activeShortcuts.map(shortcut => {
          return (
            <div>
              Click {shortcut.title} or press {shortcut.shortcut} to toggle {shortcut.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default HelpContainer