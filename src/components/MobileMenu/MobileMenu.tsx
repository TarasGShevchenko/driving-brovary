import React, { FC } from 'react'
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface MobileMenuProps {
  close: () => void
  items: { to: string; value: string }[]
}

const MenuContent = styled('div')(() => ({
  width: 300,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: '#FFFFFF',
  marginTop: 64,
}))
const MenuUl = styled('ul')(() => ({}))
const MenuLi = styled('li')(() => ({
  listStyle: 'none',
  padding: '8px 0',
  fontSize: 34,
}))
const MenuLink = styled(NavLink)(() => ({
  color: '#1b1b1b',
  textDecoration: 'none',
  fontSize: 20,
  fontWeight: 500,
  '&.active': {
    borderBottom: '3px solid #ffca3e',
  },
}))

export const MobileMenu: FC<MobileMenuProps> = ({ close, items }) => {
  return (
    <MenuContent onClick={(e) => e.stopPropagation()}>
      <MenuUl>
        {items.map(({ to, value }, index) => (
          <MenuLi key={index}>
            <MenuLink to={to} onClick={() => close()}>
              {value}
            </MenuLink>
          </MenuLi>
        ))}
      </MenuUl>
    </MenuContent>
  )
}
