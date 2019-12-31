import React from 'react'
import styled from "styled-components";


const StyledCodeRender = styled.code`
    display: block;
    margin: 0 2px;
    padding: 10px;
    white-space: nowrap;
    border: 1px solid #EEEEEE;
    background-color: #F8F8F8;
    border-radius: 3px;
    span { display: block }
`

const CodeRender = ({children}) => {

    console.log(children)

    return (
        <StyledCodeRender>
            <pre>{children}</pre>
        </StyledCodeRender>
    )
}

export default CodeRender