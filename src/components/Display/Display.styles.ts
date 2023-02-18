import styled from 'styled-components';

type Props = {
  gameOver?: boolean;
};

export const StyledDisplay = styled.div<Props>`
  
  box-sizing: border-box;
  display: grid;
  grid-gap: 5px;
  align-items: center;
  justify-content: center;
  margin: 0 5px 20px 0;
  padding: 10px;
  border: 2px solid #777;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  border: ${props => (props.gameOver ? '2px solid red' : '2px solid #777')};
  background: #000;
  font-family: Pixel,Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
`;
