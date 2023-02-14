import styled from "styled-components";

export const StylledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);

  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
`
// border: ${props => (props.form===0?'0px solid':'4px solid')};