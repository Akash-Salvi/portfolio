import { Footer, Header } from '@/components'
import React from 'react'
import { Container } from './LayoutStyles'

interface LayoutI {
    children: any
}

const Layout = ({ children }: LayoutI) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout