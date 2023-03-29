import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Link } from '../../enums'
import home from '../../assets/home.webp'
import { isMobile } from '../../utils'
import { CardPrice } from '../../components/CardPrice'
import { advantages, cards } from '../../data '
import { CardAdvantages } from '../../components/CardAdvantages'
import aboutImage from '../../assets/about.webp'

const MainContainer = styled('div')(() => ({
  background: `url(${home}) right center/cover no-repeat`,
  position: 'relative',
  ...(isMobile() && {
    backgroundPositionX: '65%',
  }),
  width: '100%',
  height: 700,
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
}))
const MainContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  height: 'inherit',
  position: 'sticky',
  zIndex: 2,
}))
const MainTitle = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 20,
  marginBottom: 20,
  fontSize: 40,
  fontWeight: 600,
  color: '#ffffff',
  ...(isMobile() && {
    fontSize: 39,
  }),
}))
const MainActions = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 30,
}))
const MainPrices = styled('div')(() => ({
  position: 'relative',
}))
const CardPriceWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}))
const Title = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: 48,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))
const Advantages = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}))
const AboutContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}))
const AboutImage = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 480,
  maxHeight: 270,
  '& > img': {
    width: '100%',
    height: '100%',
  },
}))
const AboutContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  maxWidth: 800,
  margin: 20,
}))
const AboutContentTitle = styled('h2')(() => ({}))
const AboutContentText = styled('p')(() => ({
  color: '#7c7c7c',
}))
const AboutContentLink = styled(NavLink)(() => ({
  color: '#ffca3e',
  textDecoration: 'none',
  cursor: 'pointer',
}))
const MainSiteName = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 60,
  marginBottom: 10,
  fontSize: 46,
  fontWeight: 600,
  color: '#ffffff',
  ...(isMobile() && {
    fontSize: 39,
  }),
}))

export const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {isMobile() && (
        <MainContainer>
          <MainContent>
            <MainSiteName>Автошкола DRIVING</MainSiteName>
            <MainTitle>Почніть свій шлях до безпечного та впевненого водіння!</MainTitle>
            <MainActions>
              <Button label={'Подивитись ціни'} to={Link.price} isMain />
              <Button label={'Замовити двінок'} modal isMain />
            </MainActions>
          </MainContent>
        </MainContainer>
      )}
      <Title>Чим ми кращі за інших</Title>
      <Advantages>
        {advantages.map(({ icon, position, name, content }, i) => (
          <CardAdvantages key={i} icon={icon} position={position} name={name} content={content} />
        ))}
      </Advantages>
      <Title>Наші тарифи</Title>
      <MainPrices>
        <CardPriceWrapper>
          {cards.map(({ name, price, description }, i) => (
            <CardPrice key={i} name={name} price={price} description={description} />
          ))}
        </CardPriceWrapper>
      </MainPrices>
      <Title>Про компанію</Title>
      <AboutContainer>
        <AboutImage>
          <img src={aboutImage} alt={'about'} />
        </AboutImage>
        <AboutContent>
          <AboutContentTitle>АВТОШКОЛА DRIVING</AboutContentTitle>
          <AboutContentText>
            Ласкаво просимо до автошколи &apos;DRIVING&apos;! Ми пропонуємо високоякісні послуги навчання, що допоможуть
            вам стати впевненим водієм на дорозі. Надаємо послуги навчання водіння для учнів будь-якого рівня
            складності, від початківців до впевнених водіїв.
          </AboutContentText>
          <AboutContentLink to={Link.about}>Детальніше</AboutContentLink>
        </AboutContent>
      </AboutContainer>
    </>
  )
}
