import React from 'react'
import Burger from './Burger';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Nav = styled.nav`
  width: 100%;
  // margin-bottom: 0px;
  height: 60px;
  z-index: 9999;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #FAE0DD;
  box-shadow: 0 2px 4px hsla(0, 0%, 1%, .1);

  .logo {
    padding: 5px 0;
  }

  .main-logo {
    height: 60px;
    width: 60px;
    float: left;
    margin-top: 6px;
    margin-left:20px;
  }

  @media (max-width: 768px) {
    .main-logo {
      height: 50px;
      width: 130px;
      float: left;
      margin-top: 5px;
      margin-left:0px;
    }

  }

 
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to="/"><h1 class="main-logo">Everywhen</h1></Link>
        </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
