import styled from "styled-components";

export const Container = styled.div`
  width: 1500px;

  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;
