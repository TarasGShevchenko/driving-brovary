import React, { FC } from 'react'
import { styled } from '@mui/material'

import { isMobile } from '../../utils'
import { AdvantagesItem } from '../../data '

const AdvantagesContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'start',
  padding: 40,
  margin: 10,
  boxShadow: '0px 0px 10px 0px #e5e5e5',
  width: 320,
  height: 280,
  ...(isMobile() && {
    width: 280,
    height: 240,
  }),
}))
const AdvantagesTop = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}))
const AdvantagesTitle = styled('div')(() => ({
  fontSize: 24,
  fontWeight: 500,
  color: '#1b1b1b',
}))
const AdvantagesContent = styled('div')(() => ({
  fontSize: 14,
  fontWeight: 400,
  color: '#1b1b1b',
}))
const AdvantagesPosition = styled('div')(() => ({
  fontSize: 40,
  fontWeight: 700,
  color: '#999999',
}))

export const CardAdvantages: FC<AdvantagesItem> = ({ icon, name, position, content }) => {
  const Icon = icon
  return (
    <AdvantagesContainer>
      <AdvantagesTop>
        <div>
          <Icon />
        </div>
        <AdvantagesPosition>0{position}</AdvantagesPosition>
      </AdvantagesTop>
      <AdvantagesTitle>{name}</AdvantagesTitle>
      <AdvantagesContent>{content}</AdvantagesContent>
    </AdvantagesContainer>
  )
}
