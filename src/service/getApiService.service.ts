import { axiosConfig } from './configAxios'
import { IApiProps } from 'types/props'

export const getApiArticlesSearch = async (searchProps: IApiProps) => {
    try {
        const { data } = await axiosConfig.get(
            `articles/?=${searchProps.search}&_limit=${searchProps._limit}`
        )

        return data
    } catch (e: any) {
        console.log((e as Error).message)
    }
}
