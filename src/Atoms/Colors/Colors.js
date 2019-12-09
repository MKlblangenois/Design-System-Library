import React from 'react'
import styled from 'styled-components'
import { colorDeclinaison } from './Colors.tools'

const Title = styled.h3`
    font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
`

const ColorTiles = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`

const ColorTile = styled.li`
    width: 100%;
    height: 70px;
    background-color: var(--bg-color);
`

const CodeRender = styled.code`
    display: block;
    margin: 0 2px;
    padding: 10px;
    white-space: nowrap;
    border: 1px solid #EEEEEE;
    background-color: #F8F8F8;
    border-radius: 3px;

    span { display: block }
`

const Colors = ({colorHex, colorName}) => {
    let colors = [];

    for(let i = 100; i > 0; i -= 10) { colors.push((colorDeclinaison(colorHex, i))) }
    
    return (
        <section>
            <Title>{colorName}</Title>
            <ColorTiles>
                {colors.map(color => <ColorTile style={{'--bg-color': color}}></ColorTile>)}
            </ColorTiles>

            <CodeRender>
                {colors.map((color, index) => (
                    <span>${colorName.toLowerCase()}-{index+1}0: {color};</span>
                ))}
            </CodeRender>
        </section>
    )
}

export default Colors