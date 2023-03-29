import React, { FC, ReactNode } from 'react'
import { styled } from '@mui/material'

import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

const LayoutContainer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}))
const Content = styled('div')(() => ({
  maxWidth: 1320,
  margin: 'auto',
}))

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <LayoutContainer>
    <NavBar />
    <Content>{children}</Content>
    <Footer />
  </LayoutContainer>
)
