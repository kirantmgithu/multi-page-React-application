import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';

import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className='contact-short-btn'>
            <NavLink to='/'>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">

          {/* 1st Column */}
          <div className="footer-about">
            <h3>Aniket Tiwari</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus!</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get in touch</h3>
            <form action="#">
              <input type="email"
                name="email"
                placeholder='Email'
                required autoComplete='off'
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <div>
                <a href="https://www.instagram.com/oye._.aniket/" target="_blank">
                  <FaInstagram className='icons' />
                </a>
              </div>

              <div>
                <a href="https://twitter.com/aniketttiwari" target="_blank" >
                  <FaTwitter className='icons' />
                </a>
              </div>

              <div>
                <a href="https://github.com/anikettiwari16" target="_blank">
                  <FaGithub className='icons' />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-about">
            <h3>Call Us</h3>
            <p>+91 838XXXX553</p>
          </div>
        </div>

        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Aniket Tiwari. All Rights Reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>

      </footer>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%); 

    
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3{
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p{
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social-icons{
      display: flex;
      gap: 2rem;
  
      div{
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
  
        .icons{
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom-section {
      padding-top: 9rem;
      
      hr{
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }

  }

  @media (max-width:${({ theme }) => theme.media.mobile}){
    .contact-short{
      max-width: 95vw;
      padding: 2rem 0;
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .contact-short-btn{
      text-align:center;
      justify-self: flex-start;
    }

    .footer .footer-bottom-section{
      padding-top: 3.2rem;
    }
  }

`;


export default Footer