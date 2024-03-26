import React from 'react'
import Container from '../components/shared/Container'
import Header from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'
import Body from '../components/shared/Body'
import { useSelectedRoute } from '../hooks/useSelectedRoute'
const DefaultLayout = (props) => {
    const route = useSelectedRoute();
    return (
        <>
            <Container>
                <Header />
                <Body>
                    {props.children}
                </Body>
                <Footer />
            </Container>
        </>
    )
}

export default DefaultLayout