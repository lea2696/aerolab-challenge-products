import styled from "styled-components";

export const Image = styled.img`
  width: 148px;
  height: 148px;
`;
export const CardStyle = styled.div`
  background: #ffffff;
  border-radius: 3px;
  width: 164px;
  height: 299px;
  margin: 7.5px;
  position: relative;
  padding: 5px;
`;
export const CardName = styled.div`
  font-size: 14px;
  color: #000000;
  text-align: center;
  line-height: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #0070e0;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 25%;
  text-align: center;

  span {
    text-decoration: line-through;
    color: #000000;
  }
`;
