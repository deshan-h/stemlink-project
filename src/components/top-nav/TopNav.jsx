import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../ui/button'

function TopNav() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center h-16 bg-gray-200 border-b border-b-gray-400 px-6'>
      <div className='text-xl font-bold hover:cursor-pointer' onClick={() => navigate("/")}>Stockflow</div>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </div>
  )
}

export default TopNav