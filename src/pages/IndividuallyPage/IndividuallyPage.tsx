import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { isMobile } from '../../utils'
import { individuals } from '../../data '
import { CardIndividually } from '../../components/CardIndividually'

const IndividuallyContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 40,
}))
const IndividuallyTitle = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: `${isMobile() ? '36px' : '48px'}`,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))
const Individually = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 40,
}))
const IndividuallyText = styled('p')(() => ({
  margin: 10,
  textAlign: 'center',
  maxWidth: 1024,
  color: '#7c7c7c',
}))
export const IndividuallyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <IndividuallyContainer>
      <IndividuallyTitle>Індивідуальне навчання</IndividuallyTitle>
      <IndividuallyText>
        Для всіх бажаючих підвищити свої навички водіння наша автошкола надає послуги індивідуальних занять з
        кваліфікованими інструкторами на сучасних автомобілях, обладнаних, як автоматичною так і механічною коробками
        передач на ваш вибір.
      </IndividuallyText>
      <IndividuallyText>
        Якщо для вас важлива якість, безпека і гарантований результат, то індивідуальні заняття з водіння – це Ваш
        вибір!
      </IndividuallyText>
      <Individually>
        {individuals.map(({ type, price, time }, i) => (
          <CardIndividually key={i} type={type} price={price} time={time} />
        ))}
      </Individually>
    </IndividuallyContainer>
  )
}
