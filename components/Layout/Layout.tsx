import React from 'react';
import Header from '../Header/Header';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import SideBar from '../SideBar/SideBar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className={styles.wrapper}>
      {!isMobile && <SideBar />}
      {isMobile && <Header />}
      <main className={styles.content}>
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
};

export default Layout;