import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 500px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 20px;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;
