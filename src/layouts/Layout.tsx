import React from 'react'
import { ChildProp } from '../types/commonTypes';
import NavBar from '../navbar/NavBar'
import Footer from './Footer'
import Shape from './Shape'
import HomeFooter from './HomeFooter';


interface ChildPropLayout extends ChildProp {
    title: string
}

const Layout: React.FC<ChildPropLayout> = ({ children, title }: ChildPropLayout): React.JSX.Element => {

    const ShapeFC: React.JSX.Element | "" = title !== 'Home' ? (title !== 'Anime' ? <Shape title={title} /> : '') : '';
    const FooterHomeFC: React.JSX.Element | "" = title === 'Home' ? <HomeFooter /> : '';

    return (
        <>
            <NavBar />
            {ShapeFC}

            {children}

            {FooterHomeFC}
            <Footer />
        </>
    )
}

export default Layout
