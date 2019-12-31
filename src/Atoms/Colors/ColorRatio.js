import React from "react"
import styled from "styled-components"
import colorContrast from 'color-contrast'

const StyledColorRatio = styled.span`
    display: inline-block;
    background: ${props => props.background || '#FFF'};
    color: ${props => props.color || '#FFF'};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    line-height: 1.1;
    margin-right: .5rem;
    border-radius: 3px;
    padding: 3px 3px 2px 3px;
    text-transform: uppercase;
`

const ColorRatio = (props) => {
    let colorRatio = colorContrast(props.background, props.color)
    let colorRatioRange = colorRatio >= 7 ? 'AA' : colorRatio >= 3.5 ? 'A' : 'Fail';

    return (
        <StyledColorRatio background={props.background} color={props.color}>
            {colorRatioRange}
        </StyledColorRatio>
    )
}

export default ColorRatio