import styled from 'styled-components';
import { TextForm } from 'types';
import { devices, H4, Span } from './Commons';

interface CardOptions {
	direction?:				"col" | "row"
	hiddenShadow?:			boolean
}

interface CardImageWrapper {
	mode?:			"round" | "rect" | "roundreact"
	color?:			string
}

interface CardImage {
	url: 					string
	size?:					number
	wrapper?:				CardImageWrapper
}

interface CardProps {
	title?:				TextForm
	desc?:				TextForm
	image?:				CardImage
	options?:			CardOptions
}

export default function Card({ title, desc, image, options }: CardProps) {
	return (
		<CardWrapper direction={options && options.direction} hiddenShadow={options && options.hiddenShadow}>
			{image && (
				<ImageWrapper opts={image.wrapper} size={image.size && image.size}>
					<Image size={image.size && image.size} src={image.url} alt={image.url} />
				</ImageWrapper>
			)}
			<CardContent direction={options && options.direction}>
				{title && <H4 opts={title.opts}>{title.content}</H4>}
				{desc && <Span opts={desc.opts}>{desc.content}</Span>}
			</CardContent>
		</CardWrapper>
	);
}

const CardWrapper = styled.div<{direction?: string, hiddenShadow?: boolean}>`
	display: flex;
	flex-direction: ${props => props.direction && props.direction === "row" ? "row" : "column"};
	justify-content: flex-start;
	align-items: center;
	gap: 2em;
	padding: ${props => props.direction && props.direction === "row" ? "1.5em 2em 1.5em" : "2.5em 1.5em 1.5em"};
	${props => !props.hiddenShadow && "background: #FFFFFF"};
	${props => !props.hiddenShadow && "box-shadow: 0 0 2em 0 var(--shadow)"};
	border-radius: 20px;
	@media ${devices.mobileL} {
		flex-direction: column;
	}
`;

const ImageWrapper = styled.div<{opts?: CardImageWrapper, size?: number}>`
	${props => (props.opts && props.opts.color) && "padding: 1.5em"};
	background-color: ${props => (props.opts && props.opts.color) ? props.opts.color : ""};
	border-radius: ${props => props.opts && props.opts.mode && (props.opts.mode === "round" ? "50%" : (props.opts.mode === "roundreact" ? "1em" : "0"))};
`

const Image = styled.img<{opts?: CardImageWrapper, size?: number}>`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
`

const CardContent = styled.div<{direction?: string}>`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.direction && props.direction === "row" ? "flex-start" : "center"};
	align-items: ${props => props.direction && props.direction === "row" ? "flex-start" : "center"};
	text-align: ${props => props.direction && props.direction === "row" ? "left" : "center"};
	height: 100%;
`;