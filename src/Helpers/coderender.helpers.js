import React from 'react'
import styled from "styled-components";
import Highlight, {defaultProps} from 'prism-react-renderer'


const StyledCodeRender = styled.code`
    display: block;
    margin: 0 2px;
    padding: 10px;
    white-space: nowrap;
    border: 1px solid #EEEEEE;
    background-color: #F8F8F8;
    border-radius: 3px;
    * {
        font-family: "Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace!important;
        font-size: 14px!important;
    }
    span { display: block }
`

const CodeRender = ({children}) => {

    console.log(children)

    return (
        <StyledCodeRender>
            <pre>{children}</pre>
        </StyledCodeRender>

        // <Highlight {...defaultProps} code={children} language='javascript'>
        //     {({className, style, tokens, getLineProps, getTokenProps}) => (
        //     <pre className={className} style={{...style, padding: '20px'}}>
        //         {tokens.map((line, i) => (
        //         <div key={i} {...getLineProps({line, key: i})}>
        //             {line.map((token, key) => (
        //             <span key={key} {...getTokenProps({token, key})} />
        //             ))}
        //         </div>
        //         ))}
        //     </pre>
        //     )}
        // </Highlight>
    )
}

export default CodeRender