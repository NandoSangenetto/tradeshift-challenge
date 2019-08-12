import styled from 'styled-components';

export const Fieldset = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputField = styled.input`
  border: 1px solid #cad7dc;
  color: #0f1519;
  display: block;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  border-radius: 3px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 0;
  background-color: #fff;
  height: 30px;
  &:hover {
    box-shadow: 0 0 0 1px hsla(199, 100%, 50%, 0.75);
    border-radius: 3px;
  }
  &:focus,
  &:active {
    outline: none;
    border: 1px solid #00aeff;
  }
`;

export const Label = styled.label`
  margin: 5px 0;
  line-height: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;
