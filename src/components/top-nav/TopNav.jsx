import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../ui/button'
import { routes } from '@/data/routes';

function TopNav() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const pageTitle = routes.find(({route})=> route === pathname)?.title;

  return (
    <div className='sticky top-0 z-40 flex justify-between items-center h-16 bg-gray-200 border-b border-b-gray-400 px-6'>
      <div className='text-xl font-bold hover:cursor-pointer' onClick={() => navigate("/")}>{pageTitle}</div>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </div>
  )
}

export default TopNav