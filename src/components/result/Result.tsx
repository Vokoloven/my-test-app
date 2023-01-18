import { FC } from 'react'
import { Box } from 'theme/Box'
import { useSelector } from 'react-redux'
import { selectSearch } from 'redux/selectors/selectSearch'

export const Result: FC = () => {
    const { resultPerPage } = useSelector(selectSearch)

    return (
        <Box mt={34} borderBottom={'1px solid #EAEAEA'}>
            {resultPerPage > 0 && (
                <Box as={'p'} fontWeight={600} fontSize={2} pb={'5px'}>
                    Result: {resultPerPage}
                </Box>
            )}
        </Box>
    )
}
