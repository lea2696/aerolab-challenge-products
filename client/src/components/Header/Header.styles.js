import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04),
    inset 0 -1px 0 0 rgba(0, 0, 0, 0.12);
  min-height: 3.5rem;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  margin: 14px 10px 16px 19px;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #006de3;
  letter-spacing: -0.41px;
  line-height: 20px;
  .bold-letter {
    font-weight: bold;
    font-size: 17px;
    color: #006de3;
    letter-spacing: -0.41px;
    line-height: 20px;
  }
`;
