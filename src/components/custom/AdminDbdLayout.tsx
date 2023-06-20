import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
import Navbar from 'views/admin/shared/Navbar';
import Sidebar from 'views/admin/shared/Sidebar';

type AdminLayoutProps = {
    children: React.ReactNode
}

const navItems: NavItems = [
    { title: 'Home', href: '/' },
    { title: 'Product', href: '/product' },
    { title: 'Services', href: '/service' },
    { title: 'Smart RFQ', href: '/smart-rfq' },
    { title: 'Smart Contract', href: '/smart-contract', outlined:true },
];

export default function AdminDbdLayout({ children }: AdminLayoutProps) {
    return (
        <Providers>
            <Modals />
			<Main>
                <div className="container-scroller">
                    <Sidebar />
                    <div className="container-fluid page-body-wrapper">
                        <Navbar />
                        <div className="main-panel">
                                {children}
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>
            </Main>
        </Providers>
    )
}

function Modals() {
    const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
    if (!isModalOpened) {
        return null;
    }
    return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

function Providers<T>({ children }: PropsWithChildren<T>) {
    return (
        <NewsletterModalContextProvider>
            <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
        </NewsletterModalContextProvider>
    );
}

const Main = styled.div`
    * {
        color: black;
    }
`