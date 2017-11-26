import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Lato';
  display: flex;
  width: 100%;
  height: 100vh;
  color: white;
  background: #360033;
  background: -webkit-linear-gradient(to right, #0b8793, #360033);
  background: linear-gradient(to right, #0b8793, #360033);
  align-items: center;
  flex-direction: column;
`
export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const Left = styled.div`
  display: flex;
  align-content: flex-end;
  width: 30%;
  padding-top: 50px;
  height: inherit;
`
export const Middle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 40%;
  height: inherit;
`
export const Right = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  width: 30%;
  height: inherit;
`
export const Time = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 70px;
  letter-spacing: 5px;
  padding-bottom: 20px;
`
export const Label = styled.label`
  font-family: Roboto;
  font-weight: 100;
  font-size: 18px;
  padding-bottom: 10px;
  letter-spacing: 2px;
`
export const Input = styled.input`
  margin-top: 10px;
  font-family: 'Roboto';
  font-weight: 200;
  font-size: 1.5em;
  width: 400px;
  height: 1.5em;
  padding: 0 8px;
  color: white;
  border: none;
  border-bottom: thin solid #A2A2A2;
  outline: none;
  background-color: transparent;
  transition: border-bottom .5s ease;
  &:hover, &:focus, &:after {
    border-bottom: 2px solid #FFFFFF;
  }
`
