import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';

// <Logo onClick={() => logOut(setUser)} href="/">CMPSC 263</Logo>
const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <DateHeader>March 2026</DateHeader>  
      <NavLinks>
        <NavButton>O</NavButton>
        <NavButton>:</NavButton>  
        <NavButton>L</NavButton>
        <NavButton>R</NavButton>
      </NavLinks>
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
  margin-bottom: 3.4rem;
`;

const NavButton = styled.button`
  margin-left: 1vw;
  border-radius: 100%;
  width: 2.75rem;
  height: 2.75rem;
  background: black;
  color: white;
`;

const NavLinks = styled.div`

`;

const ButtonLink = styled(Link)`
  display: inline-block;
  border-radius: 100%;
  width: 2.75rem;
  height: 2.75rem;
  background: #DCE1FD;
  text-align: center;
  line-height: 2.75
`;

export default Navbar;
