import { NavLink, useLocation } from "react-router-dom"
import {cn} from "cn";

function SidebarNavItem({ item }) {
  const { pathname } = useLocation();

  const { badge, icon: Icon, label, to, activePaths = [item.to] } = item;

  const isActive = activePaths.includes(pathname)

  return (
  <li>
    <NavLink
      to={to}
      className={cn({
        "flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium": true,
        "bg-[#fdf1ed] text-[#a63d1d] ":isActive
      })}
    >
      <Icon className="size-4 shrink-0" />
      <span>{label}</span>
      {badge &&
        (<span className="ml-auto bg-[#d85e38] px-1.5 py-0 rounded-full text-[11px] text-white text-semibold" >
          {badge}
        </span>)
      }
    </NavLink>
  </li>
  )
}

function SidebarNav({ items }) {
  return (
    <div>
      <ul className='space-y-1'>
        {items.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav;