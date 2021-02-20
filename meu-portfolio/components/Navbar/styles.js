import styled from 'styled-components';

export const Bar = styled.nav`
  background: rgb(34, 177, 76);
  > ul {
    display: flex;
    height: 50px;
    padding: 0 21px;
    text-align: center;
    line-height: 50px;
  }
  > ul li {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    color: #FFF;
    margin-right: 2%;
    margin-left: 1.3%;
  }
`;

export const Link = styled.a`
    font-style: none;
`;