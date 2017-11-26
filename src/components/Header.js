import React from 'react';
import Weather from './Weather';

import {
  Wrapper, FocalContainer, Brand
} from './styled/HeaderStyled';

const Header = () => {
  return (
    <Wrapper>
      <FocalContainer>
        <Brand>FOCAL</Brand>
      </FocalContainer>
      <Weather />
    </Wrapper>
  )
}

export default Header;
