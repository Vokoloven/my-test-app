import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearch } from 'redux/selectors/selectSearch'
import { resultPerPage } from 'redux/searchArticlesSlice/searchArticlesSlice'

import { IArticles } from 'types/props'
interface IProps {
    articles: IArticles[]
}

export const Filter: FC<IProps> = ({ articles }) => {
    const dispatch = useDispatch()
    const { search } = useSelector(selectSearch)

    useEffect(() => {
        if (search === '') {
            dispatch(resultPerPage(0))
            return
        }
        const regexp = new RegExp(`${search}`, 'gi')

        const titleLength = articles.flatMap(({ title }) =>
            title.split(' ').filter((item) => regexp.test(item))
        )

        const summaryLength = articles.flatMap(({ summary }) =>
            summary.split(' ').filter((item) => regexp.test(item))
        )
        const totalLength = titleLength.length + summaryLength.length

        dispatch(resultPerPage(totalLength))
    }, [articles, dispatch, search])

    return null
}
