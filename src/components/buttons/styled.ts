import styled from "styled-components";

export const ButtonStyled = styled.button`
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: #282c34;
  font-family: 'Montserrat', sans-serif;
  transition: .4s;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: .4s;
  }

  &:hover:after {
    border-color: #ffffff;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
`