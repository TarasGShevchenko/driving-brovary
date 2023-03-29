import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { cards } from '../../data '
import { CardPrice } from '../../components/CardPrice'
import { isMobile } from '../../utils'

const PriceContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 40,
}))
const PriceTitle = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: `${isMobile() ? '36px' : '48px'}`,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))
const MainPricesText = styled('p')(() => ({
  maxWidth: 1024,
  margin: '10px auto',
  padding: 10,
  color: '#1B1B1B',
  fontSize: 14,
  fontWeight: 400,
  textAlign: 'center',
}))
const CardPriceWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const PricePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <PriceContainer>
      <PriceTitle>Наші тарифи</PriceTitle>
      <CardPriceWrapper>
        {cards.map(({ name, price, description }, i) => (
          <CardPrice key={i} name={name} price={price} description={description} />
        ))}
      </CardPriceWrapper>
      <MainPricesText>
        Тарифи нашої автошколи – це реальна вартість якісного навчання керуванню автомобілем. На заняттях з водіння наші
        інструктори не п’ють кави а дійсно займаються з нашими учнями. Кожна хвилина уроку буде використана максимально
        ефективно і дасть гарантований результат коли ви сядете за кермо свого автомобіля.
      </MainPricesText>
      <MainPricesText>
        Вибираєте тільки те,що буде реально ефективно для Вас! Наша автошкола підготує Вас до керування автомобілем!
      </MainPricesText>
    </PriceContainer>
  )
}
