import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { advantages } from '../../data '
import { isMobile } from '../../utils'
import { CardAdvantages } from '../../components/CardAdvantages'

const AboutContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 40,
}))
const AboutTitle = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: `${isMobile() ? '36px' : '48px'}`,
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
  marginBottom: 40,
}))
const AboutContentText = styled('p')(() => ({
  margin: 10,
  textAlign: 'center',
  maxWidth: 1024,
}))

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <AboutContainer>
      <AboutTitle>Про компанію</AboutTitle>
      <Advantages>
        {advantages.map(({ icon, position, name, content }, i) => (
          <CardAdvantages key={i} icon={icon} position={position} name={name} content={content} />
        ))}
      </Advantages>
      <AboutContentText>
        Ласкаво просимо до автошколи &apos;DRIVING&apos;! Ми пропонуємо високоякісні послуги навчання, що допоможуть вам
        стати впевненим водієм на дорозі. Надаємо послуги навчання водіння для учнів будь-якого рівня складності, від
        початківців до впевнених водіїв.
      </AboutContentText>
      <AboutContentText>
        Наші досвідчені і кваліфіковані викладачі зроблять навчання безпечним, ефективним та цікавим для вас. Ми також
        пропонуємо індивідуальний підхід до кожного учня, щоб забезпечити максимальний комфорт та успіх.
      </AboutContentText>
      <AboutContentText>
        Нашим головним прагненням є забезпечити нашим учням високу якість навчання та підтримку, щоб вони здобули
        навички правильного керування та впевненість на дорозі. Зв&apos;яжіться з нами, щоб дізнатися більше про наші
        послуги та розклади занять. Реєструйтесь сьогодні та почніть свій шлях до безпечного та впевненого водіння!
      </AboutContentText>
    </AboutContainer>
  )
}
