import { FC } from 'react'
import { StyledModal } from './style/StyledModal'
import { createPortal } from 'react-dom'
import { IArticles } from 'types/props'
import { StyledTitle, StyledText } from './style/StyleModalText'
import { isModalToggler } from 'redux/statusAppSlice/statusAppSlice'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { StyledIconBack, StyledButton } from './style/StyledButton'

interface IProps {
    props: Partial<IArticles>
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement

export const Modal: FC<IProps> = ({ props }) => {
    const dispatch = useDispatch()
    return createPortal(
        <StyledModal>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.summary}</StyledText>
            <StyledText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore assumenda dolorem perspiciatis necessitatibus impedit,
                corrupti dolores ducimus, ea cupiditate consequuntur quam ab
                illo, fugit suscipit aspernatur ipsam eius repudiandae harum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, minima voluptatum est harum deserunt eos amet odio
                accusamus, totam eaque reiciendis quisquam in iusto quasi! Ad
                excepturi eum asperiores suscipit?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nihil cumque blanditiis eaque
                animi assumenda dolores, nobis illo qui accusamus aliquid,
                laboriosam tempore voluptatem nesciunt. Dicta quasi numquam nisi
                non tempore.loremLorem ipsum dolor sit amet, consectetur
                adipisicing elit. Tempore assumenda dolorem perspiciatis
                necessitatibus impedit, corrupti dolores ducimus, ea cupiditate
                consequuntur quam ab illo, fugit suscipit aspernatur ipsam eius
                repudiandae harum! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio, minima voluptatum est harum
                deserunt eos amet odio accusamus, totam eaque reiciendis
                quisquam in iusto quasi! Ad excepturi eum asperiores
                suscipit?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nihil cumque blanditiis eaque animi assumenda dolores,
                nobis illo qui accusamus aliquid, laboriosam tempore voluptatem
                nesciunt. Dicta quasi numquam nisi non tempore.loremLorem ipsum
                dolor sit amet, consectetur adipisicing elit. Tempore assumenda
                dolorem perspiciatis necessitatibus impedit, corrupti dolores
                ducimus, ea cupiditate consequuntur quam ab illo, fugit suscipit
                aspernatur ipsam eius repudiandae harum! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Distinctio, minima voluptatum
                est harum deserunt eos amet odio accusamus, totam eaque
                reiciendis quisquam in iusto quasi! Ad excepturi eum asperiores
                suscipit?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nihil cumque blanditiis eaque animi assumenda dolores,
                nobis illo qui accusamus aliquid, laboriosam tempore voluptatem
                nesciunt. Dicta quasi numquam nisi non tempore.loremLorem ipsum
                dolor sit amet, consectetur adipisicing elit. Tempore assumenda
                dolorem perspiciatis necessitatibus impedit, corrupti dolores
                ducimus, ea cupiditate consequuntur quam ab illo, fugit suscipit
                aspernatur ipsam eius repudiandae harum! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Distinctio, minima voluptatum
                est harum deserunt eos amet odio accusamus, totam eaque
                reiciendis quisquam in iusto quasi! Ad excepturi eum asperiores
                suscipit?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nihil cumque blanditiis eaque animi assumenda dolores,
                nobis illo qui accusamus aliquid, laboriosam tempore voluptatem
                nesciunt. Dicta quasi numquam nisi non tempore.loremLorem ipsum
                dolor sit amet, consectetur adipisicing elit. Tempore assumenda
                dolorem perspiciatis necessitatibus impedit, corrupti dolores
                ducimus, ea cupiditate consequuntur quam ab illo, fugit suscipit
                aspernatur ipsam eius repudiandae harum! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Distinctio, minima voluptatum
                est harum deserunt eos amet odio accusamus, totam eaque
                reiciendis quisquam in iusto quasi! Ad excepturi eum asperiores
                suscipit?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nihil cumque blanditiis eaque animi assumenda dolores,
                nobis illo qui accusamus aliquid, laboriosam tempore voluptatem
                nesciunt. Dicta quasi numquam nisi non tempore.lorem
            </StyledText>
            <StyledButton>
                <Button
                    size="small"
                    color="primary"
                    sx={{ width: '178px' }}
                    onClick={() => dispatch(isModalToggler())}
                >
                    <StyledIconBack />
                </Button>
            </StyledButton>
        </StyledModal>,
        modalRoot
    )
}
