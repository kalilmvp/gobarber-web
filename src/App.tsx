import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import Signin from './pages/Signin';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
  </>
);

export default App;
