import React from 'react';
import PropTypes from 'prop-types';

import { Fieldset, Label, InputField } from './styles';

const Input = ({ id, label, type, value, onChange }) => (
  <Fieldset>
    <Label htmlFor={id}>{label}</Label>
    <InputField id={id} type={type} onChange={onChange} value={value} />
  </Fieldset>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
