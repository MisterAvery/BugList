import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";

const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <DateHeader>March 2026</DateHeader>  
      <div>
        <NavButton background="#5167f4"><LiaDownloadSolid/></NavButton>
        <NavButton background="#be9cf3"><PiDotsThreeVerticalBold/></NavButton>  
        <NavButton background="#27282B"><MdKeyboardArrowLeft/></NavButton>
        <NavButton background="#27282B"><MdKeyboardArrowRight/></NavButton>
      </div>
    </Nav>
  );
};


const DateHeader = styled.h1`
  font-size: 2.25rem;
`;

const Nav = styled.nav`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const NavButton = styled.button`
  margin-left: 1vw;
  border-radius: 100%;
  width: 2.75rem;
  height: 2.75rem;
  background: ${props => props.background};
  color: white;
  border: none;
  font-size: 1.3rem;
  font-weight: 900;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const NavLinks = styled.div`

`;

// const ButtonLink = styled(Link)`
//   display: inline-block;
//   border-radius: 100%;
//   width: 2.75rem;
//   height: 2.75rem;
//   background: #DCE1FD;
// `;

export default Navbar;
