import React, { createContext, useContext, useState } from 'react';

export type Page = 'dashboard' | 'meus-chamados' | 'novo-chamado' | 'relatorios' | 'configuracoes';

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'dashboard',
  navigate: () => {},
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
