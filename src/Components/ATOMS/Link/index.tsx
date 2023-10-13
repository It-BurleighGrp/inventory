import { Link } from 'native-base'
import { ILink } from '@/types'
import React from 'react'

export function LinkGeneral({ children, url }: ILink) {
  return (
    <Link href={url} marginTop={2}>
      {children}
    </Link>
  )
}
