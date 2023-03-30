import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import MainComponent from './components/MainComponent';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainComponent></MainComponent>
    </ChakraProvider>
  );
}

export default App;
