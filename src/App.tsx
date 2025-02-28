import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';

import Layout from './components/Layout';
import { Home, Projects, Contact, NotFound } from './pages';
import { EPage, ENavigationOptions } from './types';

// Map paths to page states
const pathToPageMap: Record<string, EPage> = {
  [ENavigationOptions.HOME]: EPage.HOME,
  [ENavigationOptions.PROJECTS]: EPage.PROJECTS,
  [ENavigationOptions.CONTACT]: EPage.CONTACT,
};

function App() {
  const [currentPage, setCurrentPage] = useState<EPage>(EPage.HOME);

  // Handle URL changes for bookmarking and sharing
  useEffect(() => {
    const path = window.location.pathname.replace(process.env.PUBLIC_URL || '', '');
    const normalizedPath = path === '/' ? '/' : path.replace(/^\//, '');

    const page = pathToPageMap[normalizedPath] || EPage.NOT_FOUND;
    setCurrentPage(page);

    // Set up history state handling
    const handlePopState = () => {
      const newPath = window.location.pathname.replace(process.env.PUBLIC_URL || '', '');
      const newNormalizedPath = newPath === '/' ? '/' : newPath.replace(/^\//, '');
      setCurrentPage(pathToPageMap[newNormalizedPath] || EPage.NOT_FOUND);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate between pages
  const navigateTo = (page: EPage, path: string) => {
    setCurrentPage(page);

    // Update URL without full page reload
    const url = path === '/' ?
      (process.env.PUBLIC_URL || '/') :
      `${process.env.PUBLIC_URL || ''}/${path}`;

    window.history.pushState({}, '', url);
  };

  // Render the appropriate page based on state
  const renderPage = () => {
    switch (currentPage) {
      case EPage.HOME:
        return <Home navigateTo={navigateTo} />;
      case EPage.PROJECTS:
        return <Projects />;
      case EPage.CONTACT:
        return <Contact />;
      case EPage.NOT_FOUND:
      default:
        return <NotFound navigateTo={navigateTo} />;
    }
  };

  return (
    <Layout currentPage={currentPage} navigateTo={navigateTo}>
      {renderPage()}
    </Layout>
  );
}

export default App;
