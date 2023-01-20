import { FC } from 'react'
import { Input } from 'components/input/Input'
import { Container } from 'components/container/Container'
import { Posts } from 'components/posts/Posts'
import { useSelector } from 'react-redux'
import { selectGlobalStatus } from 'redux/selectors/selectGlobalStatus'
import { Backdrop } from 'components/backdrop/Backdrop'

export const Home: FC = () => {
    const { isModalOpen } = useSelector(selectGlobalStatus)

    return (
        <>
            <Container>
                {isModalOpen ? (
                    <Backdrop />
                ) : (
                    <>
                        <Input />
                        <Posts />
                    </>
                )}
            </Container>
        </>
    )
}
