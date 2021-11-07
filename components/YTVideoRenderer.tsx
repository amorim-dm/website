import { YTIteraction } from 'components/YTInteraction'
import { styled } from 'lib/stitches'

const RendererWrapper = styled('div', {})

const Renderer = styled('div', {
    width: 402,
    height: 98,
    color: '$gray12',
    fontSize: '$1',
})

export const YTVideoRenderer: React.FC = ({ children }) => {
    return (
        <RendererWrapper>
            <YTIteraction>
                <Renderer>{children}</Renderer>
            </YTIteraction>
        </RendererWrapper>
    )
}