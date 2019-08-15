import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormContainer,
  PrimaryButton,
  SecondaryButton,
  ErrorList,
} from './styles';

import Input from '../Input';
import { validateTriangle } from '../../helpers/triangleMethods';

const Form = ({ onResult }) => {
  const initialState = {
    fields: {
      a: '',
      b: '',
      c: '',
    },
    errors: [],
  };
  const [state, setState] = useState(initialState);

  const changeInput = ({ target, property }) => {
    setState({
      ...state,
      fields: {
        ...state.fields,
        [property]: target.value,
      },
    });
  };

  const validateFields = inputs =>
    Object.values(inputs).every(
      input => typeof input === 'number' && !Number.isNaN(input)
    );

  const validateForm = result => {
    const isAllFiled = validateFields(result);
    const isValidTriangle = validateTriangle(result);

    const errors = [
      !isAllFiled && 'You must fill all the fields.',
      !isValidTriangle && isAllFiled && 'The sides lenghts are invalid.',
    ].filter(Boolean);

    setState({
      ...state,
      errors,
    });

    return errors.length === 0;
  };

  const onClear = event => {
    event.preventDefault();
    setState(initialState);
  };

  const onSubmit = event => {
    event.preventDefault();

    const { a, b, c } = state.fields;
    const result = {
      a: parseInt(a, 10),
      b: parseInt(b, 10),
      c: parseInt(c, 10),
    };
    const isFormValid = validateForm(result);
    if (!isFormValid) return false;

    setState({
      ...state,
      errors: [],
    });
    onResult(result);
    return true;
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      {state.errors.length > 0 && (
        <ErrorList>
          {state.errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ErrorList>
      )}
      <Input
        id="a"
        label="A"
        type="number"
        onChange={({ target }) => changeInput({ target, property: 'a' })}
        value={state.fields.a}
      />
      <Input
        id="b"
        label="B"
        type="number"
        onChange={({ target }) => changeInput({ target, property: 'b' })}
        value={state.fields.b}
      />
      <Input
        id="c"
        label="C"
        type="number"
        onChange={({ target }) => changeInput({ target, property: 'c' })}
        value={state.fields.c}
      />
      <SecondaryButton type="button" onClick={onClear}>
        Clear fields
      </SecondaryButton>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </FormContainer>
  );
};

Form.propTypes = {
  onResult: PropTypes.func.isRequired,
};

export default Form;
