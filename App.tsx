import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';


import LoadingPage from './src/Pages/LoadingPage';
import LoginPage from './src/Pages/LoginPage';

export default function App() {
  return (
    <>
      <LoginPage />
      <StatusBar style="auto" />
    </>
  );
}
