import { FC } from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectGlobalStatus } from 'redux/selectors/selectGlobalStatus'
import { getApiArticlesById } from 'service/getApiService.service'
import { IApiProps, IArticles } from 'types/props'

import { StyledImg } from './style/StyledImg'
import { StyledBackDrop } from './style/StyledBackDrop'
import { Modal } from 'modal/Modal'

export const Backdrop: FC = () => {
    const [article, setArticle] = useState<Partial<IArticles>>({})
    const { articleId } = useSelector(selectGlobalStatus)

    useEffect(() => {
        if (articleId === 0) {
            return
        }
        const getArticleById = async ({
            articleId,
        }: Pick<IApiProps, 'articleId'>) => {
            const data = await getApiArticlesById({ articleId })
            setArticle(data)
        }

        getArticleById({ articleId })
    }, [articleId])

    return (
        article && (
            <>
                <StyledImg src={article.imageUrl} alt={article.title} />
                <StyledBackDrop />
                <Modal props={article} />
            </>
        )
    )
}
