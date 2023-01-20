import styled from 'styled-components'

export const StyledModal = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1140px;
    max-height: auto;
    width: 100%;
    padding: 35px 75px 50px 75px;

    background-color: ${(p) => p.theme.colors.white};
    border-radius: 5px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
`
