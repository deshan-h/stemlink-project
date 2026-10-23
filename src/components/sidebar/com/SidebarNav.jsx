import React from 'react'

import { sidebarNav } from '../../../data/nav';

function SidebarNavItem({item}) {
  const {badge, icon: Icon , label} = item;

  return <li>
    <div className='flex items-center gap-3 w-full h-11 px-3 text-left text-sm font-medium'>
      <Icon className="size-4 shrink-0" /> 
      <div>{ label }</div>
      {badge && <span className="ml-auto bg-[#d85e38] px-1.5 py-0 rounded-full text-[11px] text-white text-semibold" >{badge}</span>}
    </div>
  </li>
}

function SidebarNav() {
  return (
    <div>
      <ul className='space-y-1'>
        {sidebarNav.map((item) => (
          <li key={item.label}>
            <SidebarNavItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav;