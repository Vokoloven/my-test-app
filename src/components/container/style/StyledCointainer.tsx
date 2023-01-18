import styled from 'styled-components'
import { device } from 'helpers/media'

export const StyledContainer = styled('div')`
    @media ${device.laptop} {
        padding-left: 75px;
        padding-right: 75px;
    }
`
