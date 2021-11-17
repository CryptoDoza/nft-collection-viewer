import styled from "styled-components/macro";

export const Card = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
`;
