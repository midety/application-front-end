import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #1d2d35;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Divider = styled.hr`
  width: calc(100% - 320px);
  margin-top: 48px;
  margin-bottom: 48px;
  height: 5px;
  background: #fff;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  margin-top: 48px;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 0px;
  text-align: center;
  color: #ffffff;
  overflow-wrap: anywhere;
`;
