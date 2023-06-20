import styled from 'styled-components';
import { devices, H4, Text } from './Commons';

interface PortfolioProps {
	title: string
	description: string
	imageUrl: string
	imageSize?: number
	children?: any
	active?: boolean
}

export default function Portfolio({ title, description, imageUrl, imageSize, children, active }: PortfolioProps) {
	return (
		<PortfolioWrapper active={active && active}>
			<Image src={imageUrl} alt={title} />
			<PortfolioContent>
				<Title>{title}</Title>
				<Text color='gray'>{description}</Text>
				{children && children}
			</PortfolioContent>
		</PortfolioWrapper>
	);
}

const PortfolioWrapper = styled.div<{active?: boolean}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	${props => props.active && "box-shadow: 0 0 2em 0 var(--shadow);"}
	${props => props.active && "padding: 1em;"}
	@media ${devices.tablet} {
		justify-content: flex-start;
		align-items: flex-start;
	}
`;
const Image = styled.img`
	width: 100%;
	@media ${devices.tablet} {
		width: 70%;
	}
`
const PortfolioContent = styled.div`
	text-align: left;
`;
const Title = styled(H4)`
`;
