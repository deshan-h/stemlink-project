import React from 'react'

import { SidebarHeader, SidebarProfile, SidebarNav } from './com'

function SideBar({ nav, header }) {
  return (
    <div className="sticky top-0 h-screen z-40 w-60 border-r border-border bg-background flex flex-col">
      <SidebarHeader header={header} />
      <SidebarNav items={nav} />
      <SidebarProfile />
    </div>
  )
}

export default SideBar