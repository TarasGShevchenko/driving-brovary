import React, { useEffect } from 'react'
import { IconButton, styled } from '@mui/material'

import { isMobile } from '../../utils'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
// import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Map } from '../../assets/icons/map.svg'
import logo from '../../assets/logo.png'

const ContactContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 40,
}))
const ContactTitle = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: `${isMobile() ? '36px' : '48px'}`,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))
const NavBarLogo = styled('div')(() => ({
  margin: '0 8px',
  display: 'flex',
  alignItems: 'center',
  width: isMobile() ? 300 : 512,
  '& > img': {
    width: '100%',
  },
}))
const ContactItemContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: isMobile() ? 'column' : 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 1000,
  '& > a': {
    textDecoration: 'none',
    color: '#1b1b1b',
  },
}))
const ContactItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 40,
}))
const PhoneIcon = styled(Phone)(() => ({
  color: '#ffca3e',
}))
// const EmailIcon = styled(Email)(() => ({
//   color: '#ffca3e',
// }))
const MapIcon = styled(Map)(() => ({
  color: '#ffca3e',
}))
const ContactItemText = styled('div')(() => ({
  fontSize: 20,
  fontWeight: 500,
  textAlign: 'center',
}))
const ContactIFrame = styled('div')(() => ({
  width: isMobile() ? 320 : 1000,
  height: 320,
  margin: 40,
  boxShadow: '0px 0px 12px 10px #c5c5c5',
}))

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ContactContainer>
      <ContactTitle>Контакти</ContactTitle>
      <NavBarLogo>
        <img src={logo} alt={'logo'} />
      </NavBarLogo>
      <ContactItemContainer>
        <a href="tel:+380985886358">
          <ContactItem>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <ContactItemText>+38 098 588 63 58</ContactItemText>
          </ContactItem>
        </a>
        {/*<ContactItem>*/}
        {/*  <IconButton>*/}
        {/*    <EmailIcon />*/}
        {/*  </IconButton>*/}
        {/*  <ContactItemText>sashapasha@gmail.com</ContactItemText>*/}
        {/*</ContactItem>*/}
        <ContactItem>
          <IconButton>
            <MapIcon />
          </IconButton>
          <ContactItemText>
            вул. Чорновола 2
            <br />
            ТЦ &quot;Бутік&quot;
          </ContactItemText>
        </ContactItem>
      </ContactItemContainer>
      <ContactIFrame>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076.0089909124833!2d30.781762810322974!3d50.51596117626264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4dbd104d91993%3A0x65e9122cb4e7c59d!2z0JDQstGC0L7RiNC60L7Qu9CwIERSSVZJTkcgLyDQlNGA0LDQudCy0LjQvdCz!5e0!3m2!1suk!2sua!4v1680120085467!5m2!1suk!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={'contactMap'}
        ></iframe>
      </ContactIFrame>
    </ContactContainer>
  )
}
