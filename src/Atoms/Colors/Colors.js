import React from 'react'
import styled from 'styled-components'
import { darkenHSLa, lightenHSLa } from './Colors.tools'

var Color = require('color');

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

const Colors = ({colorHex, colorName, colorStart = 50}) => {
    let colors = [];

    for(let i = colorStart/10; i <= 10; i++) {
        colors[i - 1] = darkenHSLa(colorHex, (i*10) - colorStart);
    }

    for(let j = colorStart/10; j > 0; j--) {
        colors[j - 1] = lightenHSLa(colorHex, ((j*10) - colorStart)*-1);
    }
    
    return (
        <section>
            <Title>{colorName}</Title>
            <ColorTiles>
                {colors.map(color => <ColorTile style={{'--bg-color': color}}></ColorTile>)}
            </ColorTiles>

            <CodeRender>
                <span>$c-{colorName.toLowerCase()}: {colorHex}</span>
                <hr></hr>
                {colors.map((color, index) => (
                    <span>$c-{colorName.toLowerCase()}-{index}0: {color};</span>
                ))}
            </CodeRender>
        </section>
    )
}

export default Colors