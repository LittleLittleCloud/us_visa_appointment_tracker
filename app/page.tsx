'use client'
import { VisaType } from '@/api'
import { VisaTracker } from '@/components/VisaTracker'
import { Stack } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  const availableVisaTypes: VisaType[] = ['h1b']
  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
      spacing={2}>
      {availableVisaTypes.map((visaType, k) => (
        <VisaTracker
          key={k}
          visaType={visaType} />))}
    </Stack>
  )
}
