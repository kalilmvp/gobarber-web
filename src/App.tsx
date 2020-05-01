import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';

import GlobalStyles from './styles/global';

import Signin from './pages/Signin';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyles />
  </>
);

export default App;
