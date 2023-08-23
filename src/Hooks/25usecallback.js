import React from 'react'

function Title() {
    console.log('this is title')
  return (
    <div>
        <h3>
        This is useCallback
        </h3>
    </div>
  )
}

export default React.memo(Title)