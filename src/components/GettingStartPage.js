import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './shared/SyntaxHighlighterCode';

import { Link } from 'react-router-dom';

const npmInstall = `
    npm install --save lium-react-ui-library
`;
const importComponents = `
    import { Button } from 'lium-react-ui-library';
    import { InputText } from 'lium-react-ui-library';
    import { InputNumber } from 'lium-react-ui-library';
    import { SelectInput } from 'lium-react-ui-library';
    import { AutocompleteInput } from 'lium-react-ui-library';
`;

const colorsConst = `
    const colors = {
        primary: {
            normal: '#115293',
            hover: '#0A0A36',
        },
        secondary: {
            normal: '#DC004E',
            hover: '#9A0036',
        },
        danger: {
            normal: '#ff0000',
            hover: '#cc0000',
        },
        warning: {
            normal: '#ffea05',
            hover: '#e2d006'
        },
        success: {
            normal: '#06c920',
            hover: '#019e16'
        },
        dark: {
            normal: '#000000',
            hover: '#686767',
        },
    };
`;

export const GettingStartPage = () => {
    return (
        <div>
            <h1 className="title-component">Installation</h1>
            <br />
            <p>
                lium-react-ui-library is available as an &nbsp;
                <Link className="autocomplete__link" to={{ pathname: "https://www.npmjs.com/package/lium-react-ui-library" }}  target="_blank">
                    npm package.
                </Link>
            </p>

            <br />
            <h3 className="title-component">npm</h3>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={npmInstall} />
            <p>
                Please note that  you need to have react &gt;= 16.8.0 and react-dom 	&gt;= 16.8.0 are peer dependencies.
                When you install the pacakage, you can use the components import the component you want like:
            </p>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={importComponents} />

            <br/>
            <p>
                This package manages a constant where is the configurations of different themes used in the components. You are free
                for use it or change it. For the last one, go to &nbsp;
                <Link className="autocomplete__link" to="/api/customize">
                    Customize
                </Link> &nbsp;tab in the sidebar.
            </p>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={colorsConst} />
            
            <br/>
            <p>
               Here, you can find a very small &nbsp;
               <Link className="autocomplete__link" to="/api/customize">
                    Demo App
                </Link> &nbsp;tab in the sidebar.  using these components. So, go ahead!
            </p>
        </div>
    );
}
