import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import { InputAdornment } from '@mui/material'
import { CustomSearchIcon } from './StyledSearchIcon'
import { useState, useEffect } from 'react'
import { useDebounce } from 'hook/useDebounce'
import { useDispatch } from 'react-redux'
import { searchByInput } from 'redux/searchArticlesSlice/searchArticlesSlice'

export function UseFormControl() {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState<string>('')
    const debounceInputValue = useDebounce<string>(inputValue, 500)

    const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value.toLowerCase())
    }

    useEffect(() => {
        dispatch(searchByInput(debounceInputValue))
    }, [debounceInputValue, dispatch])

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(ev: React.FormEvent) => {
                ev.preventDefault()
            }}
        >
            <FormControl
                onChange={handeChange}
                sx={{
                    width: '600px',
                }}
            >
                <OutlinedInput
                    sx={{
                        boxShadow: '0px 4px 4px rgba(0 0 0 / 0.25)',
                        borderRadius: '5px',
                        input: {
                            fontSize: '16px',
                            '&::placeholder': {
                                opacity: '1',
                            },
                        },
                    }}
                    placeholder="The most successful IT companies in 2020"
                    startAdornment={
                        <InputAdornment position="start">
                            <CustomSearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}
