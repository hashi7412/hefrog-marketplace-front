import React from 'react'
import styled from 'styled-components'
import { devices } from './Commons'

interface CardContainerProps {
	count?:				number
	children:			JSX.Element
}

const CardContainer = ({
	count,
	children
}: CardContainerProps) => {
	return (
		<CardContainerWrapper count={count ? count : 1}>
			{children}
		</CardContainerWrapper>
	)
}

const CardContainerWrapper = styled.div<{count:number}>`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: -1.5em;
	margin-bottom: -1.5em;
	margin-left: -${props => `${100 / props.count / 8}%`};
	margin-right: -${props => `${100 / props.count / 8}%`};
	@media ${devices.laptop} {
		margin-top: -1em;
		margin-bottom: -1em;
		margin-left: -2em;
		margin-right: -2em;
	}
	@media ${devices.tablet} {
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 0;
		margin-right: 0;
	}
	>div {
		width: ${props => `${100 / props.count}%`};
		padding: 1.5em ${props => `${100 / props.count / 8}%`};
		>div {
			height: 100%;
		}
		@media ${devices.laptop} {
			padding: 1em 2em;
			width: ${props => `${100/(~~(props.count + 1) / 2)}%`};
		}
		@media ${devices.tablet} {
			padding: 1em 0;
			width: 100%;
		}
	}
`

export default CardContainer