import styled from 'styled-components';

export const NewsContainer = styled.div`
  left: 0px;
  bottom: 0px;
  height: 100px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

export const News = styled.div`
  border-radius: 5px;
  background-color: rgba(0,0,0,.3);
  width: 90%;
  height: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.p`
  font-family: Lato;
  margin-bottom: 10px;
  font-size: 13px;
  width: 75%;
`
export const LinkURL = styled.a`
  font-family: Lato;
  font-weight: 100;
  text-decoration: none;
  color: #D0D0D0;
  font-size: 13px;
  width: inherit;
  text-align: center;
  width: 90%;
  transition: .5s ease;
  &:hover, &:active {
    color: #FFFFFF;
  }
`
