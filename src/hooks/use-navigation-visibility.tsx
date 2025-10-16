import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface NavigationVisibilityContextType {
  isVisible: boolean;
  hideNavigation: () => void;
  showNavigation: () => void;
}

const NavigationVisibilityContext = createContext<NavigationVisibilityContextType | undefined>(undefined);

export function NavigationVisibilityProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  const hideNavigation = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showNavigation = useCallback(() => {
    setIsVisible(true);
  }, []);

  return (
    <NavigationVisibilityContext.Provider value={{ isVisible, hideNavigation, showNavigation }}>
      {children}
    </NavigationVisibilityContext.Provider>
  );
}

export function useNavigationVisibility() {
  const context = useContext(NavigationVisibilityContext);
  if (context === undefined) {
    throw new Error('useNavigationVisibility must be used within a NavigationVisibilityProvider');
  }
  return context;
}
