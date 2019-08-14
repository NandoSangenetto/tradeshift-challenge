import styled, { css } from 'styled-components';
import media from '../../helpers/mediaQueries';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  ${media.desktop`
    margin: 0;
    max-width: 682px;
  `}
`;

const Button = css`
  user-select: none;
  padding: 10px;
  text-align: center;
  max-height: 40px;
  display: inline-block;
  cursor: pointer;
  border-radius: 20px;
  transition-property: color, background-color, border-color;
  transition-timing-function: ease;
  border: 0;
  &:focus,
  &:active {
    outline: none;
    border-style: solid;
  }
`;

export const PrimaryButton = styled.button`
  ${Button}
  background-color: rgb(0, 174, 255);
  color: rgb(255, 255, 255);
  &:hover {
    background-color: rgb(0, 132, 204);
  }
  &:focus,
  &:active {
    border-color: #25639e;
  }
`;

export const SecondaryButton = styled.button`
  ${Button}
  background-color: rgb(255, 255, 255);
  color: rgb(15, 21, 25);
  border: 1px solid rgb(202, 215, 220);
  margin: 0 5px 0 auto;
  &:hover {
    background-color: rgba(203, 215, 220, 0.5);
  }
  &:focus,
  &:active {
    border-color: #48adf8;
  }
`;

export const ErrorList = styled.ul`
  color: #bc0000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  li {
    margin-left: 20px;
    list-style: circle;
    line-height: 1.3;
  }
`;
