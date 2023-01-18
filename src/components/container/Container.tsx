import { FC } from 'react'
import { StyledContainer } from './style/StyledCointainer'
import { PropsChildren } from 'types/props'

export const Container: FC<PropsChildren> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>
}
