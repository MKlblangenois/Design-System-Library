import React from 'react'
import styled from 'styled-components'

import ColorRatio from './ColorRatio'

const ColorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.5rem 0 3rem;
`

const ColorContainerInfo = styled.div`
    flex-basis: 30%;
    width: 30%;

    h3 {
        margin: 0

        small {
            display: block;
            color: #444;
            font-weight: 400;
        }
    }
`
const ColorContainerPreview = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 5px;
    flex-basis: 70%;
    width: 70%;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, .2);
    height: 50px;
    border-radius: 3px;
    background: ${props => props.colorHex || '#FFF'};
`



const ColorSingle = (props) => {

    return (
        <ColorContainer>
            <ColorContainerInfo>
                <h3>
                    {props.colorUse}
                    <small>{props.colorName} - {props.colorHex}</small>
                </h3>
            </ColorContainerInfo>

            <ColorContainerPreview colorHex={props.colorHex}>
                <ColorRatio
                    background={props.colorForeground}
                    color={props.colorHex}
                />
                <ColorRatio
                    background={props.colorBackground}
                    color={props.colorHex}
                />
            </ColorContainerPreview>
        </ColorContainer>
    )
}

export default ColorSingle