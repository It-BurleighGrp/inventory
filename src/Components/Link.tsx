/* eslint-disable @typescript-eslint/no-unused-vars */
import { ITextProps } from 'native-base'
import { ReactNode } from 'react'
import { Link } from 'native-base'

interface UrlProps extends ITextProps {
  children: ReactNode
  url: string
}
export function Url({ children, url, ...rest }: UrlProps) {
  return (
    <Link href={url} marginTop={2}>
      {children}
    </Link>
  )
}
