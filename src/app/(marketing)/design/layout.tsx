import { DocsSidebarNav } from '@/components/sidebar-nav'
import { ScrollArea } from '@/components/ui/scroll-area'
import { docsConfig } from '@/config/docs'
import React, { PropsWithChildren } from 'react'

interface DesignLayoutProps { }

export default function DesignLayout({children}: PropsWithChildren<DesignLayoutProps>) {
  return (
    <div className="border-b pt-16">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <div className='pt-16'>
        {children}
        </div>
      </div>
    </div>
  )
}