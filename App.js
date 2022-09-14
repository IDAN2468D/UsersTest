import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/NavigationBar/Navigation';
import { AuthProvider } from './src/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
  )
}

export default App