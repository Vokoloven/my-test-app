import { FC } from 'react'
import { useState, useEffect } from 'react'
import { getApiArticlesSearch } from 'service/getApiService.service'
import { IArticles } from 'types/props'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearch } from 'redux/selectors/selectSearch'
import { IApiProps } from 'types/props'
import { MultiActionAreaCard } from './Card'
import { Filter } from 'components/filter/Filter'
import { Box } from 'theme/Box'

export const Posts: FC = () => {
    const [articles, setArticles] = useState<IArticles[]>([])
    const { itemsPerPage } = useSelector(selectSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        const searchProps: Pick<IApiProps, '_limit'> = {
            _limit: itemsPerPage,
        }

        const getDataApi = async (searchProps: Pick<IApiProps, '_limit'>) => {
            const data = await getApiArticlesSearch(searchProps)

            if (data && data.length > 0) {
                setArticles(data)
            }
        }
        getDataApi(searchProps)
    }, [dispatch, itemsPerPage])

    return (
        <Box>
            {articles && articles.length > 0 && (
                <MultiActionAreaCard articles={articles} />
            )}
            <Filter articles={articles} />
        </Box>
    )
}
