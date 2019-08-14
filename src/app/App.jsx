import React from 'react';
import { render } from 'react-dom';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';

import { BaseStyle } from './styles';

import HomePage from './components/HomePage';

const App = () => (
  <>
    <Normalize />
    <Reset />
    <BaseStyle />
    <HomePage />
  </>
);

render(<App />, document.getElementById('app'));
