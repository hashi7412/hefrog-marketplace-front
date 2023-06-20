import NextLink from 'next/link';
import { PropsWithChildren } from "react";
import styled from "styled-components"
import { media } from 'utils/media';

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '500px',
    tablet: '768px',
    laptop: '1200px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const devices = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export const colors = {
    bg: "var(--bg)",
    bgSection: "var(--bg-section)",
    color: "var(--color)",
    colorGray: "var(--color-gray)",
    colorPrimary: "var(--color-primary)",
    colorNavyblue: "var(--color-navyblue)",
    border: "var(--border)",
    shadow: "var(--shadow)"
}

export const HeaderWrapper = styled.div`
	margin-bottom: 5em;
    @media ${devices.tablet} {
        margin-bottom: 1em;
    }
`;

export const Image = styled.img``

export const Container = styled.main`
	padding: 0em 5em 0;
	
	@media ${devices.laptop} {
		padding: 0 1em;
	}
	@media ${devices.tablet} {
		padding: 0 3em;
	}
	@media ${devices.mobileL} {
		padding: 0 1em;
	}
`
export const ContainerWrapper = styled.div<{ bgColor?: string, bgImg?: string }>`
	${props => props.bgColor && `background-color: ${props.bgColor}`};
    ${props => props.bgImg && `background-image: url('${props.bgImg}')`};
	background-size: cover;
	background-position: center center;
    margin-left: -5em;
    margin-right: -5em;
	padding-bottom: 2em;
	>* {
		margin-bottom: 0em;
	}
	@media ${devices.laptop} {
		margin-left: -1em;
    	margin-right: -1em;
	}
	@media ${devices.tablet} {
		margin-left: -3em;
    	margin-right: -3em;
	}
	@media ${devices.mobileL} {
		margin-left: -1em;
    	margin-right: -1em;
	}
`

export const H3 = styled.h3<{ opts?: TextStyle }>`
	position: relative;
	display: inline-block;
	font-size: ${props => (props.opts && props.opts.size) ? props.opts.size : '2.125em'};
    font-weight: 600;
	text-transform: capitalize;
	color: ${props => (props.opts && props.opts.color) ? props.opts.color : 'var(--color-navyblue)'};
	line-height: 1.5;
	margin-bottom: 0.8em;
	@media ${devices.laptop} {
		font-size: 1.9em;
	}
	@media ${devices.tablet} {
		font-size: 1.75em;
	}
`

export const H4 = styled.h4<{ opts?: TextStyle }>`
	position: relative;
	display: inline-block;
	font-size: ${props => (props.opts && props.opts.size) ? props.opts.size : '1.3em'};
	font-weight: 600;
	text-transform: capitalize;
	color: ${props => (props.opts && props.opts.color) ? props.opts.color : 'var(--color-navyblue)'};
	line-height: 1.25;
	margin-bottom: 0.5em;
	@media ${devices.laptop} {
		font-size: 1.1em;
	}
	@media ${devices.tablet} {
		font-size: 1em;
	}
`

export const Span = styled.span<{ opts?: TextStyle }>`
	position: relative;
	display: inline-block;
	font-size: 1em;
	color: ${props => (props.opts && props.opts.color) ? props.opts.color : 'var(--color-navyblue)'};
	@media ${devices.laptop} {
		font-size: 0.95em;
	}
	@media ${devices.tablet} {
		font-size: 0.9em;
	}
`

export const SectionSubTitle = styled(Span) <{ opts?: TextStyle }>`
	position: relative;
	display: inline-block;
	font-size: ${props => (props.opts && props.opts.size) ? props.opts.size : '1.625em'};
	color: ${props => (props.opts && props.opts.color) ? props.opts.color : 'var(--color-navyblue)'};
	font-weight: 600;
	line-height: 1.5;
	margin-bottom: 1em;
	@media ${devices.laptop} {
		font-size: 1.35em;
	}
	@media ${devices.tablet} {
		font-size: 1.2em;
	}
`

export const Desc = styled.div<{ opts?: TextStyle }>`
	font-size: ${props => (props.opts && props.opts.size) ? props.opts.size : '1.4em'};
	font-weight: 400;
	color: ${props => (props.opts && props.opts.color) ? props.opts.color : 'var(--color-navyblue)'};
	margin-bottom: 1em;
	line-height: 1.5;
	@media ${devices.laptop} {
		font-size: 1.1em;
	}
	@media ${devices.tablet} {
		font-size: 1em;
	}
`

export const SubDesc = styled.p<{ opts?: TextStyle }>`
	font-size: 1.2em;
	line-height: 1.7;
	margin-bottom: 1em;
	color: ${props => (props.opts && props.opts.color) ? props.opts.color : ''};
	@media ${devices.laptop} {
		font-size: 1em;
	}
	@media ${devices.tablet} {
		font-size: 0.9em;
	}
`

export const Text = styled.p<{ color?: string }>`
	font-size: 1em;
	line-height: 1.7;
	color: var(${props => `--color${props.color ? `-${props.color}` : ""}`});
	@media ${devices.tablet} {
		font-size: 0.9em;
	}
`

export interface LinkProps {
    href: string;
    style?: any
}

export const Link = ({ href, children, style }: PropsWithChildren<LinkProps>) => {
    return (
        <NextLink href={href} passHref>
            <Anchor style={style}>{children}</Anchor>
        </NextLink>
    );
}

const Anchor = styled.span`
	text-decoration: none;
	color: #983df3;
	cursor: pointer;
	@media ${devices.laptop} {
		font-size: 1.1em;
	}
	@media ${devices.tablet} {
		font-size: 1em;
	}
`

export const Input = styled.input<{ isBlock?: boolean, isHalf?: boolean }>`
	${props => props.isBlock && "width: 100%"};
	${props => props.isBlock && "flex: 1 1 100%"};
	padding: 1em 1.5em;
	outline: 0;
	font-size: 1em;
	border: 0;
	border-radius: 0.5em;
	box-shadow: 0 0 2em 0 var(--shadow);
	:focus, :hover {
		box-shadow: 0 0 2em 0 var(--shadow-secondary);
	}
	@media ${devices.tablet} {
		font-size: 0.9em;
		padding: 0.8em 1.2em;
	}
`
export const TextArea = styled.textarea<{ isBlock?: boolean, isHalf?: boolean }>`
	${props => props.isBlock && "width: 100%"};
	${props => props.isBlock && "flex: 1 1 100%"};
	padding: 1em 1.5em;
	outline: 0;
	font-size: 1em;
	border: 0;
	border-radius: 0.5em;
	min-width: 100%;
	max-width: 100%;
	box-shadow: 0 0 2em 0 var(--shadow);
	:focus, :hover {
		box-shadow: 0 0 2em 0 var(--shadow-secondary);
	}
	@media ${devices.tablet} {
		font-size: 0.9em;
		padding: 0.8em 1.2em;
	}
`

export const ButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > *:not(:last-child) {
		margin-right: 2rem;
	}

	${media('<=tablet')} {
		& > * {
		width: 100%;
		}

		& > *:not(:last-child) {
		margin-bottom: 2rem;
		margin-right: 0rem;
		}
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: 0;
	border: 0;
	font-size: 1.3em;
	padding: 1em 3em;
	border-radius: 0.5em;
	cursor: pointer;
	:focus, :hover {
		box-shadow: 0 0 2em 0 var(--shadow);
	}
	@media ${devices.laptop} {
		padding: 0.7em 1.5em;
		font-size: 1.1em;
	}
	@media ${devices.tablet} {
		padding: 0.7em 1.5em;
		font-size: 0.9em;
	}
`

export const PrimaryButton = styled(Button)`
	background-color: var(--color-primary);
	color: var(--bg);
`

export const NavyBlueButton = styled(Button)`
	background-color: var(--color-navyblue);
	color: var(--bg);
`

export const YellowButton = styled(Button)`
	background-color: #FCD635;
	color: var(--color);
`

export const NoneButton = styled(Button)`
	font-weight: 600;
	background-color: rgba(255, 255, 255, 0);
	color: var(--color-primary);
`

export const WhiteButton = styled(Button)`
	font-weight: 600;
	background-color: rgba(255, 255, 255);
	color: var(--color-primary);
`

export const InfoButton = styled(Button)`
	border: 1px solid var(--color-primary);
	background-color: rgba(255, 255, 255, 0);
	color: var(--color-primary);
`

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
`