import { ReactNode } from 'react'
import styled from 'styled-components'
import {
    color,
    ColorProps,
    flexbox,
    space,
    layout,
    border,
    typography,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BorderProps,
    LayoutProps,
} from 'styled-system'

interface IBox
    extends ColorProps,
        FlexboxProps,
        SpaceProps,
        TypographyProps,
        BorderProps,
        LayoutProps {
    children: ReactNode
}

export const Box = styled('div')<IBox>(
    color,
    flexbox,
    space,
    typography,
    border,
    layout
)
