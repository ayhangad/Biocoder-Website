import React from 'react'
import Container from '../components/shared/Container'

const EmptyLayout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default EmptyLayout