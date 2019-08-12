import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormContainer, PrimaryButton, SecondaryButton } from './styles';

import Input from '../Input';

const Form = ({ onResult }) => {
  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
  });

  const changeInput = ({ target, property }) => {
    setState({
      ...state,
      [property]: target.value,
    });
  };

  const onSubmit = event => {
    onResult(state);
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Input
        id="a"
        label="A"
        type="number"
        onChange={({ target }) => changeInput({ target, property: 'a' })}
        value={state.a}
      />
      <Input
        id="b"
        label="B"
        type="number"
        onChange={({ target }) => changeInput({ target, property: 'b' })}
        value={state.b}
      />
      <Input
        id="c"
        label="C"
        type="number"
        onChange={({ target }) => changeInput({ target, property: 'c' })}
        value={state.c}
      />
      <SecondaryButton type="button">Clear</SecondaryButton>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </FormContainer>
  );
};

Form.propTypes = {
  onResult: PropTypes.func.isRequired,
};

export default Form;
