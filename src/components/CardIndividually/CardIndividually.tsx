import React, { FC } from 'react'
import { styled } from '@mui/material'

import { isMobile } from '../../utils'
import { IndividuallyType } from '../../data '
import { Button } from '../Button'

const IndividuallyContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: 10,
  backgroundColor: 'rgba(2, 1, 1, 0)',
  boxShadow: '0px 0px 10px 0px #e5e5e5',
  width: 400,
  height: 500,
  ...(isMobile() && {
    width: 320,
    height: 400,
  }),
}))
const IndividuallyTop = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))
const IndividuallyTopName = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 20px',
  fontSize: 24,
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
const IndividuallyPrice = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 20px',
  fontSize: 30,
  fontWeight: 600,
}))
const IndividuallyTime = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 20px',
  fontSize: 22,
  fontWeight: 400,
  color: '#7c7c7c',
}))

export const CardIndividually: FC<IndividuallyType> = ({ type, price, time }) => {
  return (
    <IndividuallyContainer>
      <IndividuallyTop>
        <IndividuallyTopName>{type}</IndividuallyTopName>
      </IndividuallyTop>
      <IndividuallyPrice>{price}</IndividuallyPrice>
      <IndividuallyTime>{time}</IndividuallyTime>
      <Button label={'Подати заявку'} modal />
    </IndividuallyContainer>
  )
}
