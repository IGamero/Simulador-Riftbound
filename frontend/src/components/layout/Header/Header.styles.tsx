
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const btnStyle = css`
  padding: 8px 16px;
  color: white;
  font-size: 20px;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: cyan;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 70px;
  background-color: black;
  color: white;
`;

const Logo = styled.img`
  height: 90%;
  position: relative;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

const RightSection = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled(Link)`
  ${btnStyle}
`;

const NavBtn = styled.button`
  all: unset;
  ${btnStyle}
`;

export {
    btnStyle,
    HeaderContainer,
    Logo,
    LeftSection,
    RightSection,
    NavLink,
    NavBtn
};

