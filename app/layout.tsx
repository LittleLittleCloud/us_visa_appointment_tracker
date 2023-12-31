'use client'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { VisaAppBar } from '@/components/AppBar'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = React.useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        secondary: '#1E1E1E',
        default: '#121212', 
        paper: '#1E1E1E'
      }
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        secondary: '#F5F5F5',
        default: '#FFFFFF', 
        paper: '#FFFFFF'
      }
    },
  });
  return (
    <html lang="en">
      <body>
    <ThemeProvider
      theme={darkTheme}>
      <Head>
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: "column",
          width: "100%",
          height: "100vh"}}>
        <VisaAppBar />
        <Box
          sx={{
            weight: '100%',
            height: '92%',
            flexGrow: 1,
            overflow: 'auto',
            margin: '2rem',
          }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
    </body>
    </html>
  )
}
