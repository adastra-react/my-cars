import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import HomePage from './app/containers/HomePage/HomePage';


const AppContainer = styled.div` 
    ${tw`
        flex
        w-full
        h-full
        flex-col
    `}
 `;

function App() {
  return (
    <AppContainer>
       <HomePage />
    </AppContainer>
  );
}

export default App;
