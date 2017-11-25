import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  box-shadow: 0 0px 40px 0px rgba(0,0,0, 0.7);
  align-items: center;
`

const FocalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

`
const Brand = styled.p`
  font-family: 'Poppins';
  font-size: 60px;
  letter-spacing: 10px;
  color: #FFFFFF;
`

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
