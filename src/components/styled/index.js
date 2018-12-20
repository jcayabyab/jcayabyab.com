import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 500px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  padding: 10px;
  align-items: top;
`;