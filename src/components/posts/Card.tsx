import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { FC } from 'react'
import { IArticles } from 'types/props'
import { StyledBox } from './style/StyledBox'
import { StyledReadMoreIcon, StyledCalendarIcon } from './style/StyledIcons'
import { isModalOpen } from 'redux/statusAppSlice/statusAppSlice'
import { useDispatch } from 'react-redux'
import { Box } from 'theme/Box'
import moment from 'moment'

interface IProps {
    articles: IArticles[]
}

export const MultiActionAreaCard: FC<IProps> = ({ articles }) => {
    const dispatch = useDispatch()

    const handleClick = (id: number) => {
        dispatch(isModalOpen())
    }

    return (
        <StyledBox>
            {articles.map(({ id, imageUrl, title, summary, publishedAt }) => {
                return (
                    <Card
                        sx={{ maxWidth: 400 }}
                        key={id}
                        onClick={() => handleClick(id)}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="217"
                                image={imageUrl}
                                alt={title}
                            />
                            <CardContent sx={{ padding: '20px' }}>
                                <Box
                                    display={'flex'}
                                    mt={'25px'}
                                    pl={'5px'}
                                    pr={'5px'}
                                >
                                    <StyledCalendarIcon />
                                    <Box
                                        as={'p'}
                                        fontSize={'14px'}
                                        fontFamily={'Montserrat, sans-serif'}
                                        color={'#363636'}
                                        opacity={'0.6'}
                                        ml={'8px'}
                                    >
                                        {moment(new Date(publishedAt)).format(
                                            'MMMM Do, YYYY'
                                        )}
                                    </Box>
                                </Box>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        marginTop: '24px',
                                        marginBottom: '0px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: '24px',
                                        color: '##363636',
                                        textShadow:
                                            '0px 4px 4px rgba(0, 0, 0, 0.25);',
                                    }}
                                >
                                    {title.length > 100
                                        ? title.slice(0, 100) + '...'
                                        : title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        marginTop: '20px',
                                        paddingLeft: '5px',
                                        paddingRight: '5px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: '16px',
                                        opacity: '1',
                                        color: '#363636',
                                    }}
                                >
                                    {summary.length > 100
                                        ? summary.slice(0, 100) + '...'
                                        : summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions
                            sx={{ paddingLeft: '25px', paddingRight: '25px' }}
                        >
                            <Button
                                size="small"
                                color="primary"
                                sx={{ width: '110px' }}
                            >
                                <StyledReadMoreIcon />
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </StyledBox>
    )
}
