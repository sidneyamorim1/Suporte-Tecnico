import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="text-on-surface bg-background min-h-screen font-body-md flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col md:ml-sidebar-width min-w-0 transition-all">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-gutter space-y-stack-lg max-w-container-max mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
