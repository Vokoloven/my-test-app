import { ReactNode } from 'react'

export type PropsChildren = {
    children: ReactNode
}

export interface IApiProps {
    search: string
    _limit: number
}

export interface IArticles {
    id: number
    featured: false
    title: 'string'
    url: 'string'
    imageUrl: 'string'
    newsSite: 'string'
    summary: 'string'
    publishedAt: 'string'
    launches: [
        {
            id: 'string'
            provider: 'string'
        }
    ]
    events: [
        {
            id: 'string'
            provider: 'string'
        }
    ]
}
