import styled from "styled-components"
import { Desc, devices, H3, SectionSubTitle, SubDesc } from "components/Commons"
import { TextForm } from "types"

interface SplitSectionOptionObject {
	showBg?:             boolean
	direction?:          "" | "reverse"
}

interface SplitSectionProps {
	children:           any
	options?:			SplitSectionOptionObject
}

interface MainPanelProps {
	title?:             TextForm
	subTitle?:          TextForm
	desc?:              TextForm
	subDesc?:           TextForm
	headerAlign?:       "left" | "center" | "right"
	children:           any
	pm?:                boolean
	bg?:                string
}

interface OptionsObject {
	width?:             string
	bgColor?:			string
}

interface ContentPanelProps {
	children:           any
	options?:           OptionsObject
}

export const MainPanel = ({title, subTitle, desc, subDesc, headerAlign, children, pm, bg}: MainPanelProps) => {
	return (
		<MainPanelWrapper pm={pm ? "5em" : "0"} bg={bg}>
			<MainPanelHeader align={headerAlign}>
				{title && (
					<div><Title opts={title.opts}>{ title.content }</Title></div>
				)}
				{subTitle && (
					<div><SectionSubTitle opts={subTitle.opts}>{ subTitle.content }</SectionSubTitle></div>
				)}
				{desc && (
					<div><Desc opts={desc.opts}>{ desc.content }</Desc></div>
				)}
				{subDesc && (
					<div><SubDesc opts={subDesc.opts}>{ subDesc.content }</SubDesc></div>
				)}
			</MainPanelHeader>
			<MainPanelContent>{children}</MainPanelContent>
		</MainPanelWrapper>
	)
}

export const ContentPanel = ({children, options}: ContentPanelProps) => {
	return (
		<ContentPanelWrapper width={options && options.width ? options.width : "auto"} bgColor={options && options.bgColor}>
			{children}
		</ContentPanelWrapper>
	)
}

const SplitSection = ({ children, options }: SplitSectionProps) => {
	return (
		<SplitSectionWrapper>
			<SplitSectionContainer options={options ? options : {}}>
				{children}
			</SplitSectionContainer>
		</SplitSectionWrapper>
	)
}

const SplitSectionWrapper = styled.div`
	position: relative;
	margin-bottom: 5em;
	@media ${devices.laptop} {
	}
	@media ${devices.tablet} {
		margin-bottom: 3em;
	}
	@media ${devices.mobileL} {
		margin-bottom: 1em;
	}
`
const SplitSectionContainer = styled.div<{options: SplitSectionOptionObject}>`
	display: flex;
	flex-direction: ${props => props.options && props.options.direction === "reverse" ? "row-reverse" : "row"};
	align-items: center;
	padding: 0 5em;
	background-color: ${props => props.options && props.options.showBg ? "var(--bg-section)" : ""};
	border-radius: 1em;
	@media ${devices.laptop} {
		padding: 0 3em;
	}
	@media ${devices.tablet} {
		padding: 0 1em;
		flex-direction: column;
	}
`
const MainPanelWrapper = styled.div<{pm: string, bg?: string}>`
	flex: 1;
	height: 100%;
	${props => props.bg && `background-image: url("${props.bg}")`};
	background-size: cover;
	margin: auto;
	padding: 3.5em 0;
	padding-left: ${props => props.pm};
	border-radius: 1em;
	@media ${devices.tablet} {
		padding: 1em 0 0 0;
		width: 100%;
	}
`
const MainPanelHeader = styled.div<{align?: string}>`
	text-align: ${props => props.align ? props.align : "left"};
`
const Title = styled(H3)`
`
const MainPanelContent = styled.div`
	padding: 1em 0;
	@media ${devices.tablet} {
		padding: 0em 0;
	}
`
const ContentPanelWrapper = styled.div<{width: string, bgColor?: string}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: ${props => props.width};
	${props => props.bgColor && `background-color: ${props.bgColor}`};
	margin: 3.5em auto 1em;
	/* padding: 0em 2em 0; */
	border-radius: 1em;
	>div {
		text-align: center;
		width: auto;
	}
	@media ${devices.tablet} {
		padding: 0em;
		width: 100%;
	}
`
export default SplitSection;