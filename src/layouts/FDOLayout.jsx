import React from 'react'

import TopNav from '../components/top-nav/TopNav'
import SideBar from '../components/sidebar/SideBar'

import { sidebarNavFDO, sidebarHeaderFDO } from '@/data/sidebar/sidebar_nav_fdo'

function FDOLayout({ children }) {
    return (
        <div className="flex flex-row min-h-screen">
            <SideBar nav={sidebarNavFDO} header={sidebarHeaderFDO} />

            <div className="flex-1 bg-gray-100">
                <TopNav />
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FDOLayout