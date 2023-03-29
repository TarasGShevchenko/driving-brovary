import React, { FC } from 'react'
import { styled } from '@mui/material'

import { ReactComponent as CardPricePoint } from '../../assets/icons/card-elem.svg'
import { Button } from '../Button'
import { isMobile } from '../../utils'
import { Card } from '../../data '

const CardPriceContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  backgroundColor: 'rgba(2, 1, 1, 0)',
  boxShadow: '0px 0px 10px 0px #e5e5e5',
  width: 400,
  height: 680,
  ...(isMobile() && {
    width: 320,
    height: 600,
  }),
}))
const CardPriceTop = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))
const CardPriceTopName = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 20px',
  fontSize: 20,
  fontWeight: 700,
  color: '#1b1b1b',
  backgroundColor: '#ffca3e',
  borderStyle: 'solid',
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#ffca3e',
  width: 150,
  height: 50,
  textTransform: 'uppercase',
  transform: 'skew(340deg)',
}))
const CardPriceTopPrice = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 20px',
  fontSize: 40,
  fontWeight: 600,
  fontStyle: 'italic',
  color: '#800000',
}))
const CardPriceCenter = styled('ul')(() => ({
  ...(isMobile() && {
    paddingInlineStart: 10,
  }),
}))
const CardPriceCenterItem = styled('li')(() => ({
  padding: 8,
  listStyle: 'none',
  '& > svg': {
    margin: '4px 12px 0 0',
  },
}))

export const CardPrice: FC<Card> = ({ name, price, description }) => {
  return (
    <CardPriceContainer>
      <CardPriceTop>
        <CardPriceTopName>{name}</CardPriceTopName>
        <CardPriceTopPrice>{price}</CardPriceTopPrice>
      </CardPriceTop>
      <CardPriceCenter>
        <CardPriceCenterItem>
          <CardPricePoint />
          &nbsp;<strong>{description[0]}</strong>
        </CardPriceCenterItem>
        <CardPriceCenterItem>
          <CardPricePoint />
          &nbsp;<strong>{description[1]}</strong>
        </CardPriceCenterItem>
        {description.map((item, i) => {
          if (i === 0 || i === 1) return null
          return (
            <CardPriceCenterItem key={i}>
              <CardPricePoint />
              &nbsp;{item}
            </CardPriceCenterItem>
          )
        })}
      </CardPriceCenter>
      <Button label={'Залишити заявку'} modal />
    </CardPriceContainer>
  )
}
