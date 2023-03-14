import React from 'react';
import AppHeader from './components/AppHeader';
import UserManagement from './components/UserManagement';

export const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <UserManagement />
    </>
  );
}

export default React.memo(App);
