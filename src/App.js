import React from 'react';
import Layout from './layout/Layout';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;