import React from 'react'

import { SidebarHeader, SidebarProfile, SidebarNav } from './com'
import { sidebarNav } from '@/data/nav';

function SideBar() {
  return (
    <div className="w-60 border-r border-border bg-background flex flex-col">
      <SidebarHeader />
      <SidebarNav items={sidebarNav} />
      <SidebarProfile />
    </div>
  )
}

export default SideBar