import styled from 'styled-components';

import media from '../../helpers/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
`;

export const Title = styled.h1`
  width: 100%;
`;

export const SideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0;
  padding: 12px;
  ${media.desktop`
    max-width: 318px;
  `}
`;

export const Result = styled.p`
  color: red;
`;
