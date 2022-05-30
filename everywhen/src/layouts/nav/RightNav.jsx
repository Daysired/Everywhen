import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 40px;
  

    li  {
      padding: 13px 18px;
      color: #638C80;
      font-weight: bold;
      text-decoration: none;


      a  {
        color: #638C80;
        font-weight: bold;
        font-family: "COM4t Fine Regular", sans-serif;
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
     }
    
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background-color: #638C80;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: -15px;
      right: 0;
      // height: 260px;
      // width: 150px;
      height: 100%;
      width: 100%;
      padding-top: 0;
      transition: transform 0.3s ease-in-out;
      align-items: center;
      justify-content: center;

      li {
        // padding: 15px;
        text-decoration: none;
        color: 	white;
        padding-top: 9vh;
        padding-bottom: 9vh;
        padding-left: 9vh;

        a {
         color: 	white;
         font-size: 2.5vh;

         &:hover {
         color: #FFD000;
         text-decoration: none;
         }
        }

        &:hover {
          color: #fff;
        }
      }
    }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">
          Home
        </a>
      </li>

      <li>
        <a href="/assessment">
          Wellness-Assessment
        </a>
      </li>
      
      <li>
      <a href="/card">
      Wellness-Card
        </a>
      </li>
      
      </Ul>
  )
}

export default RightNav
