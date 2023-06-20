/* eslint-disable jsx-a11y/anchor-is-valid */
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRef } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import { devices, Input } from './Commons';
import Icons from './Icons';
import Logo from './Logo';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
	{
		title: 'Product',
		items: [
			{ title: 'Features', href: '/features' },
			{ title: 'Something', href: '/something' },
			{ title: 'Something else', href: '/something-else' },
			{ title: 'And something else', href: '/and-something-else' },
		],
	},
	{
		title: 'Knowledge',
		items: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'FAQ', href: '/faq' },
			{ title: 'Help Center', href: '/help-center' },
		],
	},
	{
		title: 'Something',
		items: [
			{ title: 'Features2', href: '/features2' },
			{ title: 'Something2', href: '/something2' },
			{ title: 'Something else2', href: '/something-else2' },
			{ title: 'And something else2', href: '/and-something-else2' },
		],
	},
];

export default function Footer() {

	const emailRef = useRef<HTMLInputElement>(null);

	const subscribeUs = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const res = await fetch(`${process.env.API_URL}/api/subscribe`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				
				body: JSON.stringify({email: emailRef.current?.value}),
			});

			if (res.status !== 204) {
				// setHasErrored(true);
			}
		} catch {
			// setHasErrored(true);
			return;
		}
	}

	return (
		<FooterWrapper>
			<ContentWrapper>
				<Logo />
				<Content>
					Lorem ipsum dolor sit amet,consectetur
					adipisicing elit. Quis non, fugit totam vel
					laboriosam vitae.
				</Content>
				<ShareBar>
					<NextLink href="https://www.facebook.com/my-saas-startup" passHref>
						<a><Icons.Facebook /></a>
					</NextLink>
					<NextLink href="https://www.twitter.com/my-saas-startup" passHref>
						<a><Icons.Twitter /></a>
					</NextLink>
					<NextLink href="https://www.google.com/my-saas-startup" passHref>
						<a><Icons.Google /></a>
					</NextLink>
					<NextLink href="https://www.linkdin.com/my-saas-startup" passHref>
						<a><Icons.Linkdin /></a>
					</NextLink>
				</ShareBar>
			</ContentWrapper>
			<ListContainer>
				{footerItems.map((singleItem) => (
					<FooterList key={singleItem.title} {...singleItem} />
				))}
			</ListContainer>

			<InputContainer>
				<form onSubmit={subscribeUs}>
					<ListHeader>Subscribe Us</ListHeader>
					<InputWrapper>
						<CoustomInput type="email" placeholder="Info@yourgmail.com" id="email" ref={emailRef} />
						<CustomButton as="button" type="submit">
							<NextImage src={'/footer/send.png'} width={17} height={20} alt={'send'} />
						</CustomButton>
					</InputWrapper>
				</form>
			</InputContainer>
		</FooterWrapper >
	);
}

function FooterList({ title, items }: SingleFooterList) {
	return (
		<ListWrapper>
			<ListHeader>{title}</ListHeader>
			{items.map((singleItem) => (
				<ListItem key={singleItem.href} {...singleItem} />
			))}
		</ListWrapper>
	);
}

function ListItem({ title, href }: SingleFooterListItem) {
	return (
		<ListItemWrapper>
			<NextLink href={href} passHref>
				<a style={{
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '14px',
					lineHeight: '22px',
					/* identical to box height, or 157% */
					color: '#FFFFFF'
				}}>{title}</a>
			</NextLink>
		</ListItemWrapper>
	);
}

const FooterWrapper = styled.div`
	display: flex;
	background-image: url(bg-footer.jpg);
	background-size: cover;
	background-position: center center;
	justify-content: space-between;
	gap: 5em;
	padding: 7em 10em 5em;
	color: rgb(var(--textSecondary));
	@media ${devices.laptop} {
		flex-wrap: wrap;
		padding: 5em 3em 3em;
		gap: 3em;
	}
`;

const ContentWrapper = styled.div`
	width: 20%;
	@media ${devices.tablet} {
		width: 100%;
	}
`

const Content = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	margin-bottom: 2em;
	color: #FFFFFF;
`;

const ListContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 1em;
	@media ${devices.tablet} {
		display: none;
	}
`;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7em;
	& > *:not(:first-child) {
	}
	${media('<=tablet')} {
		flex: 0 40%;
	}
	${media('<=phone')} {
		flex: 0 100%;
	}
`;

const ListItemWrapper = styled.p`
	font-size: 1.6rem;
	a {
		text-decoration: none;
		color: rgba(var(--textSecondary), 0.75);
	}
`;

const ListHeader = styled.p`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 26px;
	text-transform: capitalize;
	color: #FFFFFF;
`;

const InputContainer = styled.div`
	width: 25%;
	@media ${devices.tablet} {
		width: 100%;
	}
`

const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const CoustomInput = styled(Input)`
	flex: 1;
	background-color: transparent;
	min-width: 0;
	border-style: solid !important;
	border-color: #FFF !important;
	border-width: 1px 0 1px 1px !important;
	border-radius: 10px 0 0 10px !important;
	color: white;
	&::placeholder{
		color: white;
	}
`;

const CustomButton = styled(Button)`
	height: 100%;
	background: #64A5CA;
	border-radius: 0px 10px 10px 0px;
	padding: 1.6em;
	border-color: #64A5CA;
`;

const ShareBar = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	> a {
		font-size: 1.75em;
	}
	@media ${devices.tablet} {
		justify-content: flex-start;
		padding: 0 1em;
		gap:2em;
	}
`;