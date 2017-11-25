import styled from 'styled-components';

export const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const Todo = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 3em;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 2px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: white;
  background-color: rgba(255, 255, 255, 0.11);
`
export const Item = styled.div`
  padding-left: 10px;
  font-family: Lato;
  font-size: 22px;
  font-weight: 100;
  line-height: normal;

`
export const Delete = styled.button`
  padding-right: 10px;
  border: none;
  outline: none;
  height: inherit;
  width: 50px;
  background-color: transparent;
`
