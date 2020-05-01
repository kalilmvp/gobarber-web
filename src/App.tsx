import React from 'react';

import AppProvider from './hooks';

import GlobalStyles from './styles/global';

import Signin from './pages/Signin';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>

    <GlobalStyles />
  </>
);

export default App;
