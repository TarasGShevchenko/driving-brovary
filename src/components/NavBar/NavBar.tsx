import React, { useCallback, useMemo, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Drawer, IconButton, styled, Link as LinkMui } from '@mui/material'

import { Button } from '../Button'
import { Link } from '../../enums'
import { isMobile } from '../../utils'
import { ReactComponent as Burger } from '../../assets/icons/menu-burger.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import home from '../../assets/home.webp'
import logo from '../../assets/logo.png'

const NavBarWrapper = styled('div')<{ main: boolean }>(({ main }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '#1b1b1b',
  ...(main && {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 700,
    background: `url(${home}) center center/cover no-repeat`,
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.65)',
      zIndex: 1,
    },
  }),
}))
const NavBarContainer = styled('div')<{ main: boolean }>(({ main }) => ({
  maxWidth: 1320,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  ...(main && {
    marginTop: 40,
    zIndex: 2,
  }),
}))
const NavBarLinks = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))
const NavBarLink = styled('li')(() => ({
  color: '#FCFCFC',
  listStyle: 'none',
}))
const StyledNavLink = styled(NavLink)(() => ({
  color: '#FCFCFC',
  textDecoration: 'none',
  padding: '8px 10px',
  fontSize: 13,
  fontWeight: 500,
  '&.active': {
    borderBottom: '3px solid #ffca3e',
  },
  '&:hover': {
    borderBottom: '3px solid #ffca3e',
  },
}))
const NavbarInfo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}))
const NavbarInfoContent = styled('div')(() => ({
  margin: '16px 0',
  '& > p': {
    color: '#FCFCFC',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: '6px',
    margin: '8px 0',
  },
}))
const NavBarInfoTitle = styled('div')(() => ({
  color: '#ffca3e',
  fontSize: 13,
  fontWeight: 700,
}))
const NavBarInfoTell = styled('a')(() => ({
  color: '#FCFCFC',
  fontSize: 13,
  fontWeight: 500,
  lineHeight: '6px',
  textDecoration: 'none',
}))
const MobileNavBarWrapper = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#1b1b1b',
  zIndex: 9999,
  width: '100%',
}))

const MobileNavBarActions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 8,
}))
const NavBarContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  height: '100%',
  zIndex: 2,
}))
const NavBarContentTitle = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 40,
  marginBottom: 40,
  fontSize: 40,
  fontWeight: 600,
  color: '#ffffff',
  ...(isMobile() && {
    fontSize: 39,
  }),
}))
const NavBarContentActions = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 60,
}))
const NavBarLogo = styled('div')(() => ({
  marginLeft: 16,
  display: 'flex',
  alignItems: 'center',
  width: 66,
  ...(!isMobile() && {
    margin: 0,
    width: 80,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
  '& > img': {
    width: '100%',
    height: '100%',
  },
}))
const PhoneIcon = styled(Phone)(() => ({
  color: 'white',
}))
const LinkPhone = styled(LinkMui)(() => ({
  flex: '0 0 auto',
  fontSize: '1.5rem',
  padding: 8,
}))
const MobileLogoWrap = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  // padding: 8,
}))
const MobileLogoLabel = styled('div')(() => ({
  fontSize: 12,
  color: '#FFFFFF',
}))
const MainSiteName = styled('div')(() => ({
  fontSize: 46,
  fontWeight: 600,
  color: '#ffffff',
  ...(isMobile() && {
    fontSize: 39,
  }),
}))

export const NavBar = () => {
  const mobileDevice = isMobile()
  const location = useLocation()
  const history = useNavigate()
  const main = useMemo(() => location.pathname === Link.main, [location])
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])
  const goToMain = useCallback(() => {
    history(Link.main)
    window.scroll(0, 0)
  }, [history])

  return !mobileDevice ? (
    <NavBarWrapper main={main}>
      <NavBarContainer main={main}>
        <NavBarLinks>
          <NavBarLink>
            <StyledNavLink to={Link.main}>Головна</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.price}>Вартість</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.individually}>Індивідуально</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.about}>Про компанію</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.contact}>Контакти</StyledNavLink>
          </NavBarLink>
        </NavBarLinks>
        <NavBarLogo onClick={goToMain}>
          <img src={logo} alt={'logo'} />
        </NavBarLogo>
        <NavbarInfo>
          <NavbarInfoContent>
            <NavBarInfoTitle>Автошкола Driving Бровари</NavBarInfoTitle>
            <NavBarInfoTell href="tel:+380985886358" aria-label={'link-phone'}>
              +38 098 588 63 58
            </NavBarInfoTell>
            <p>вул. Чорновола 2, ТЦ &quot;Бутік&quot;</p>
          </NavbarInfoContent>
          <Button label={'Замовити дзвінок'} modal />
        </NavbarInfo>
      </NavBarContainer>
      {main && (
        <NavBarContent>
          <MainSiteName>DRIVING</MainSiteName>
          <NavBarContentTitle>Твоя автошкола в Броварах</NavBarContentTitle>
          <NavBarContentTitle>Почніть свій шлях до безпечного та впевненого водіння!</NavBarContentTitle>
          <NavBarContentActions>
            <Button label={'Подивитись ціни'} to={Link.price} isMain />
            <Button label={'Замовити двінок'} modal isMain />
          </NavBarContentActions>
        </NavBarContent>
      )}
    </NavBarWrapper>
  ) : (
    <MobileNavBarWrapper>
      <MobileLogoWrap>
        <NavBarLogo onClick={goToMain}>
          <img src={logo} alt={'logo'} />
        </NavBarLogo>
        <MobileLogoLabel>Ми в Броварах</MobileLogoLabel>
      </MobileLogoWrap>
      <MobileNavBarActions>
        <LinkPhone href="tel:+380985886358" aria-label={'link-phone-mobile'}>
          <PhoneIcon />
        </LinkPhone>
        <IconButton onClick={handleOpen} name={'burgerMenu'} aria-label={'burger menu'}>
          <Burger />
        </IconButton>
      </MobileNavBarActions>
      <Drawer anchor={'left'} open={open} onClose={handleClose}>
        <MobileMenu
          close={handleClose}
          items={[
            { to: Link.main, value: 'Головна' },
            { to: Link.price, value: 'Вартість' },
            { to: Link.individually, value: 'Індивідуально' },
            { to: Link.about, value: 'Про компанію' },
            { to: Link.contact, value: 'Контакти' },
          ]}
        />
      </Drawer>
    </MobileNavBarWrapper>
  )
}
