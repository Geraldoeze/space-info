
import React from 'react'
import Navigation from '../Navigation/Navigation'

export default function Layout({children}) {
  return (
    
    <div className='h-[40em] bg-[black]'>
      <Navigation /> 
      {children}
    </div>
  )
}
