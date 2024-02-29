import styled, {keyframes} from "styled-components";

const appearing = keyframes`
  0%{
    opacity: 0;
    transform: translateY(20px);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  animation: ${appearing} 500ms ease-in-out;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 4px 4px 0 0 black;
  flex-direction: column;
`

export const CardName = styled.span`
    font-weight: 600;
`