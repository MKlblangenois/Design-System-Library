import React from 'react'
import styled from 'styled-components'

const ColorContainer = styled.div`
    background: red;
`

const ColorSingle = (props) => {

    return (
        <h1>{props.colorName}</h1>
    )
}

export default ColorSingle