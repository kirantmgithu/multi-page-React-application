import React from 'react'
import styled from 'styled-components'

const Contact = () => {



  return (
    <Wrapper>
      <h2 className='common-heading'>Feel free to Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.272003841331!2d74.18699649999998!3d17.308986000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1826400000001%3A0x34bdd98ca25093e3!2sGovernment%20College%20of%20Engineering%2C%20Karad!5e0!3m2!1sen!2sin!4v1659791986349!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container">
        <div className="contact-form">

          <form action="https://formspree.io/f/mvoypnoq" method="post" className='contact-inputs'>
            <input
              type="text"
              name="username"
              placeholder='Username'
              autoComplete='off'
              required
            />

            <input
              type="email"
              name="Email"
              placeholder='Email'
              autoComplete='off'
              required
            />

            <textarea
              name="message" cols="30"
              rows="10"
              autoComplete='off'
              required >
            </textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container{
    margin-top: 6rem;
    text-align: center;

    .contact-form{
      max-width: 50rem;
      margin: auto;
    }

    .contact-inputs{
      display: flex;
      flex-direction: column;
      gap: 3rem;

    input[type="submit"]{
      cursor: pointer;
      transition : all 0.2s;

      &:hover{
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.btn};
        color:  ${({ theme }) => theme.colors.btn};
        transform: scale(0.9);
      }
    }
   }
  }

`;

export default Contact