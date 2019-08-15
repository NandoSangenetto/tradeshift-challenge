import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Form from '.';

describe('Form test', () => {
  it('Should render the component properly', () => {
    const onResult = jest.fn();
    const { container } = render(<Form onResult={onResult} />);
    expect(container).toBeInTheDocument();
  });

  it('Should change the value of the fields', () => {
    const onResult = jest.fn();
    const { container } = render(<Form onResult={onResult} />);

    const fields = container.querySelectorAll('input');

    fields.forEach(field => {
      const randomNumber = Math.floor(Math.random() * 100 - 1).toString();
      fireEvent.change(field, {
        target: { value: randomNumber },
      });
      expect(field.value).toBe(randomNumber);
    });
  });

  it('Should call onResult if everything is ok', () => {
    const onResult = jest.fn();
    const { container } = render(<Form onResult={onResult} />);

    const fields = container.querySelectorAll('input');

    fields.forEach(field => {
      // Making a valid triangle
      fireEvent.change(field, {
        target: { value: '100' },
      });
    });

    const submitButton = container.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);

    expect(onResult).toBeCalled();
  });

  it('Should not call onResult if the triangle is invalid', () => {
    const onResult = jest.fn();
    const { container } = render(<Form onResult={onResult} />);

    const fields = container.querySelectorAll('input');

    fields.forEach((field, index) => {
      // Making a invalid triangle
      fireEvent.change(field, {
        target: { value: index },
      });
    });

    const submitButton = container.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);

    expect(onResult).not.toBeCalled();
  });

  it('Should show error message when the triangle is invalid', () => {
    const onResult = jest.fn();
    const { container, getByText } = render(<Form onResult={onResult} />);

    const fields = container.querySelectorAll('input');

    fields.forEach((field, index) => {
      // Making a invalid triangle
      fireEvent.change(field, {
        target: { value: index },
      });
    });

    const submitButton = container.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);

    expect(getByText('The sides lenghts are invalid.')).toBeInTheDocument();
  });

  it('Should show error message when the form is not filled', () => {
    const onResult = jest.fn();
    const { container, getByText } = render(<Form onResult={onResult} />);

    const fieldA = container.querySelector('input');

    // Filling only one field
    fireEvent.change(fieldA, {
      target: { value: '100' },
    });

    const submitButton = container.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);

    expect(getByText('You must fill all the fields.')).toBeInTheDocument();
  });
});
