/* eslint-disable jsx-a11y/anchor-is-valid */
// import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { media } from 'utils/media';
import Drawer from 'components/custom/Drawer';
import Logo from 'components/basic/logo';
import { Button, NoneButton, PrimaryButton, devices } from 'components/custom/common';
import { HamburgerIcon } from 'components/custom/HamburgerIcon';

// const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = 'up' | 'down' | 'none';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
	const router = useRouter();
	const { toggle } = Drawer.useDrawer();
	const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');

	let lastScrollY = useRef(0);
	const lastRoute = useRef('');
	const stepSize = useRef(50);

	useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);

	function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
		const routerPath = router.asPath;
		const hasRouteChanged = routerPath !== lastRoute.current;

		if (hasRouteChanged) {
			lastRoute.current = routerPath;
			setScrollingDirection('none');
			return;
		}

		const currentScrollY = currPos.y;
		const isScrollingUp = currentScrollY > lastScrollY.current;
		const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
		const hasScrolledWholeStep = scrollDifference >= stepSize.current;
		const isInNonCollapsibleArea = lastScrollY.current > -50;

		if (isInNonCollapsibleArea) {
			setScrollingDirection('none');
			lastScrollY.current = currentScrollY;
			return;
		}

		if (!hasScrolledWholeStep) {
			lastScrollY.current = currentScrollY;
			return;
		}

		setScrollingDirection(isScrollingUp ? 'up' : 'down');
		lastScrollY.current = currentScrollY;
	}

	const isNavbarHidden = scrollingDirection === 'down';
	const isTransparent = scrollingDirection === 'none';

	return (
		<NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
			<NextLink href="/" passHref>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
			</NextLink>
			<NavItemList>
				<Menu>
					{items.map((singleItem) => (
						<NavItem key={singleItem.href} {...singleItem} />
					))}
				</Menu>
				<ButtonWrapper>
					<NavItemWrapper>
						<NextLink href="/buyer" passHref>
							<PrimaryButton>Get Started</PrimaryButton>
						</NextLink>
					</NavItemWrapper>
					{/* <SearchButton><img src='/header/search.svg' /></SearchButton> */}
					<ProfileButton><Image src='/header/user.svg' alt="User" /></ProfileButton>
				</ButtonWrapper>
			</NavItemList>
			<HamburgerMenuWrapper>
				<HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
			</HamburgerMenuWrapper>
		</NavbarContainer>
	);
}

function NavItem({ href, title, outlined }: SingleNavItem) {
	const { setIsModalOpened } = useNewsletterModalContext();

	function showNewsletterModal() {
		setIsModalOpened(true);
	}

	if (outlined) {
		return <LoginButton onClick={showNewsletterModal}>{title}</LoginButton>;
	}

	return (
		<NavItemWrapper outlined={outlined}>
			<NextLink href={href} passHref>
				<NoneButton>{title}</NoneButton>
			</NextLink>
		</NavItemWrapper>
	);
}

const NavbarContainer = styled.div<NavbarContainerProps>`
	position: sticky;
	top: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 8rem;
	margin-top: 2rem;
	padding: 0 7em;
	z-index: var(--z-navbar);

	visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
	transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};
	transition-property: transform, visibility, height, box-shadow, background-color;
	transition-duration: 0.15s;
	transition-timing-function: ease-in-out;

	@media ${devices.laptop} {
		padding: 0 2em;
	}
	@media ${devices.tablet} {
		padding: 0 2em;
	}
`;

const LogoWrapper = styled.a`
	display: flex;
	text-decoration: none;
	padding: 0.75em 1.3em;
	color: rgb(var(--logoColor));
`;

const NavItemList = styled.div`
	flex: 1;
	display: flex;
	list-style: none;
	justify-content: flex-end;
	gap: 3em;

	${media('<desktop')} {
		display: none;
	}
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
	background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
	line-height: 2em;
	border-radius: 0.5rem;
	text-transform: capitalize;
	color: #243A73;

	&:hover {
		background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
		transition: background-color 0.2s;
	}

	button {
		font-size: 1.05em;
		font-weight: 600;
		padding: 0.75em 1.3em;
	}

	&:not(:last-child) {
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1em;
`

const ProfileButton = styled(Button)`
	padding: 0.75em;
	background: none;
	border: none;
`;

const Image = styled.img``

const LoginButton = styled(Button)`
	padding: 0.75rem 1.5rem;
	border-radius: 20px;
	line-height: 1.8;
	background-color: white;
	color: black;
`;

const HamburgerMenuWrapper = styled.div`
	${media('>=desktop')} {
		display: none;
	}
`;
