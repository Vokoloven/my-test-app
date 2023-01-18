import { FC } from 'react'
import { StyledBox } from './style/StyledBox'
import { UseFormControl } from './style/StyledInput'
import { StyledSpanLabel } from './style/StyledLabel'
import { StyledLabel } from './style/StyledLabel'
import { Result } from 'components/result/Result'

export const Input: FC = () => {
    return (
        <StyledBox>
            <StyledLabel htmlFor="filter">
                <StyledSpanLabel>Filter by keywords</StyledSpanLabel>
            </StyledLabel>
            <UseFormControl />
            <Result />
        </StyledBox>
    )
}
