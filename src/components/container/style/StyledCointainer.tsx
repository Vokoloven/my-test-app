import styled from 'styled-components'
import { device } from 'helpers/media'

export const StyledContainer = styled('div')`
    @media ${device.laptopL} {
        max-width: 1440px;
        padding-left: 75px;
        padding-right: 75px;
        margin-left: auto;
        margin-right: auto;
    }
`
