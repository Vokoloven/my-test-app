import { FC } from 'react'
import { useState, useEffect } from 'react'
import { getApiArticlesSearch } from 'service/getApiService.service'
import { IArticles } from 'types/props'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearch } from 'redux/selectors/selectSearch'
import { IApiProps } from 'types/props'
import { MultiActionAreaCard } from './Card'
import { resultPerPage } from 'redux/searchArticlesSlice/searchArticlesSlice'

export const Posts: FC = () => {
    const [articles, setArticles] = useState<IArticles[]>([])
    const [filteredArt, setFilteredArt] = useState<IArticles[]>([])

    const { search, itemsPerPage } = useSelector(selectSearch)
    const dispatch = useDispatch()

    const string =
        'Rocket Lab cautiously optimistic about Neutron’s future in national security launch'

    // console.log(string.indexOf('about'))
    // console.log(string.lastIndexOf('cautiously'))

    console.log(
        string.slice(
            string.indexOf(search),
            string.indexOf(search) + search.length
        )
    )

    if (articles.length > 0) {
        console.log(articles)
        const data = articles.map(({ title }) =>
            console.log(title.toLowerCase().indexOf('china'))
        )
        console.log(data)
    }

    // if (articles.length > 0) {
    //     console.log(articles)
    //     const data = articles.filter(({ title }) =>
    //         title
    //             .toLowerCase()
    //             .slice(
    //                 title.indexOf(search),
    //                 title.indexOf(search) + search.length
    //             )
    //     )
    //     console.log(data)
    // }

    useEffect(() => {
        const searchProps: IApiProps = {
            search,
            _limit: itemsPerPage,
        }

        if (search === '') {
            setArticles([])
            dispatch(resultPerPage(0))
        }

        const getDataApi = async (searchProps: IApiProps) => {
            if (searchProps.search === '') {
                return
            }

            const data = await getApiArticlesSearch(searchProps)

            if (data && data.length > 0) {
                setArticles(data)
                dispatch(resultPerPage(data.length))
            }
        }
        getDataApi(searchProps)
    }, [dispatch, itemsPerPage, search])

    return (
        <>
            {articles && articles.length > 0 && (
                <MultiActionAreaCard articles={articles} />
            )}
        </>
    )
}
