import React from 'react'

function HeroName({heroname}) {
    if(heroname==='tiger')throw new Error('chutiya khi ka ')
  return (
  
    <div>
      {heroname}
    </div>
  )
}

export default HeroName