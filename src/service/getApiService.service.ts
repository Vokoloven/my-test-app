import { axiosConfig } from './configAxios'
import { IApiProps } from 'types/props'

export const getApiArticlesSearch = async (
    searchProps: Pick<IApiProps, '_limit'>
) => {
    try {
        const { data } = await axiosConfig.get(
            `articles/?_limit=${searchProps._limit}`
        )

        return data
    } catch (e: any) {
        console.log((e as Error).message)
    }
}

export const getApiArticlesById = async ({
    articleId,
}: Pick<IApiProps, 'articleId'>) => {
    try {
        const { data } = await axiosConfig.get(`articles/${articleId}`)

        return data
    } catch (e: any) {
        console.log((e as Error).message)
    }
}
