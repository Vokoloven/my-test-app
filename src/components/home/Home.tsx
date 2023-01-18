import { FC } from 'react'
import { Input } from 'components/input/Input'
import { Container } from 'components/container/Container'
import { Posts } from 'components/posts/Posts'

export const Home: FC = () => {
    return (
        <>
            <Container>
                <Input />
                <Posts />
            </Container>
        </>
    )
}
