import React, { useState } from 'react';

import { Wrapper, Title, SideContainer, Result } from './styles';

import Triangle from '../Triangle';
import Form from '../Form';

import { triangleType } from '../../helpers/triangleMethods';

const HomePage = () => {
  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
  });

  const isTriangleInitialized = Object.values(state).every(item => item !== '');

  const onFormChange = result => {
    setState(result);
  };

  return (
    <Wrapper>
      <Title>Triangle Challenge</Title>
      <Form onResult={onFormChange} />
      <SideContainer>
        {isTriangleInitialized && (
          <>
            <Result>{triangleType(state)}</Result>
            <Triangle a={state.a} b={state.b} c={state.c} />
          </>
        )}
      </SideContainer>
    </Wrapper>
  );
};

export default HomePage;
