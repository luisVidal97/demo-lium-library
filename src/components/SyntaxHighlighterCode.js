import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

export const SyntaxHighlighterCode = ({ value}) => {
    return (
        <SyntaxHighlighter style={dracula} language="javascript" children={value} />
    )
}
