import styled from 'styled-components/native'
import { Button as StyledButton } from 'native-base'
import { TButton } from '@/types'

export const Button = styled(StyledButton)<TButton>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '45px'};
  border-radius: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 6px;
`
