import React, { useState } from 'react';
import { render } from 'react-dom';
import { Reset } from 'styled-reset';
import { Normalize } from 'styled-normalize';

import { BaseStyle, Wrapper, Title, SideContainer } from './styles';

import Triangle from './Triangle';
import Form from './Form';

const App = () => {
  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
  });

  const isTriangleInitialized = Object.entries(state).every(
    item => item[1] !== ''
  );

  const onFormChange = result => {
    setState(result);
  };

  return (
    <>
      <Normalize />
      <Reset />
      <BaseStyle />
      <Wrapper>
        <Title>Triangle Challenge</Title>
        <Form onResult={onFormChange} />
        <SideContainer>
          {isTriangleInitialized && (
            <Triangle a={state.a} b={state.b} c={state.c} />
          )}
        </SideContainer>
      </Wrapper>
    </>
  );
};

render(<App />, document.getElementById('app'));
