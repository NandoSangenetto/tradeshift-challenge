import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from '.';

describe('Input test', () => {
  it('Should render the Input component properly', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Input
        id="abc"
        label="Name"
        type="text"
        value="Robson"
        onChange={onChange}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('Should render the all props properly', () => {
    const props = {
      id: 'abc',
      label: 'Name',
      type: 'text',
      value: 'Robson',
      onChange: jest.fn(),
    };
    const { container, getByText } = render(
      <Input
        id={props.id}
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    );

    const label = getByText(props.label);
    expect(label).toBeInTheDocument();
    expect(label.htmlFor).toBe(props.id);

    expect(container.firstChild.tagName).toBe('FIELDSET');

    const input = container.querySelector(`#${props.id}`);
    expect(input.id).toBe(props.id);
    expect(input.type).toBe(props.type);
    expect(input.value).toBe(props.value);
  });

  it('Should call onChange', () => {
    const props = {
      id: 'abc',
      label: 'Name',
      type: 'text',
      value: 'Robson',
      onChange: jest.fn(),
    };
    const { container } = render(
      <Input
        id={props.id}
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    );

    const input = container.querySelector(`#${props.id}`);
    fireEvent.change(input, {
      target: { value: 'John Doe' },
    });
    expect(props.onChange).toBeCalled();
  });
});
