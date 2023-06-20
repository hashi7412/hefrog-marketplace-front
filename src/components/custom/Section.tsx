import React from "react"
import styled from "styled-components"
import { TextForm } from "types"
import { Desc,devices, H3, SectionSubTitle, SubDesc } from "./Commons"

export interface SectionOption {
	showBg?:				boolean
	headerAlign?:			"right" | "left" | "center"
}

interface SectionProps {
	title?:             TextForm
	subTitle?:          TextForm
	desc?:				TextForm
	subDesc?:			TextForm
	children:           JSX.Element
	options?:			SectionOption
	bg?:				string
}

const Section = ({
	title, subTitle, desc, subDesc, children, options, bg
}: SectionProps) => {
	return (
		<SectionWrapper bg={bg}>
			<SectionContainer showBg={options && options.showBg ? options.showBg : false}>
				{(title || subTitle || desc || subDesc) && (
					<SectionHeader headerAlign = {options && options.headerAlign ? options?.headerAlign : "center"}>
						{title && (
							<div><H3 opts={title.opts}>{title.content}</H3></div>
						)}
						{subTitle && (
							<div><SectionSubTitle opts={subTitle.opts}>{subTitle.content}</SectionSubTitle></div>
						)}
						{desc && (
							<div><Desc opts={desc.opts}>{desc.content}</Desc></div>
						)}
						{subDesc && (
							<div><SubDesc  opts={subDesc.opts}>{subDesc.content}</SubDesc></div>
						)}
					</SectionHeader>
				)}
				<SectionContent>
					{ children }
				</SectionContent>
			</SectionContainer>
		</SectionWrapper>
	)
}

export const SectionWrapper = styled.section<{bg?: string}>`
	${props => `background-image: url('${props.bg}')`};
	background-position: center center;
	background-size: 100% 100%;
	margin-bottom: 5em;
	border-radius: 1em;
	@media ${devices.tablet} {
		margin-bottom: 3em;
	}
`
export const SectionContainer = styled.div<{showBg: boolean}>`
	display: flex;
	flex-direction: column;
	padding: 0em 5em;
	background-color: ${props => props.showBg ? "var(--bg-section)" : ""};
	border-radius: 1em;
	@media ${devices.tablet} {
		padding: 0 1em;
	}
`
export const SectionHeader = styled.div<{headerAlign: string}>`
	margin-top: 3em;
	position: relative;
	text-align: ${props => props.headerAlign};
	padding: 0 ${props => props.headerAlign === "center" ? "7em" : "0"};
	margin-bottom: 3em;
	@media ${devices.tablet} {
		margin-bottom: 0em;
		padding: 0 ${props => props.headerAlign === "center" ? "2em" : "0"};
	}
`
export const SectionContent = styled.div`
`
export default Section;