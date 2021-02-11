import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './shared/SyntaxHighlighterCode';

import { Link } from 'react-router-dom';
import { Button, InputText } from 'lium-react-ui-library';

const theme = {
    primary: {
        normal: '#bf00ff',
        hover: '#400554',
    },
    secondary: {
        normal: '#0ac9ff',
        hover: '#196d84',
    },
    danger: {
        normal: '#ff0000',
        hover: '#cc0000',
    },
}

const colorsConst = `
    const colors = {
        primary: {
            normal: '#115293',
            hover: '#9032a3',
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

const customizeTheme = `
    import React from 'react';
    import { Button } from 'lium-react-ui-library';

    // Here it defines the new themes for the components
    const theme = {
        primary: {
            normal: '#bf00ff',
            hover: '#400554',
        },
        secondary: {
            normal: '#0ac9ff',
            hover: '#196d84',
        },
        danger: {
            normal: '#ff0000',
            hover: '#cc0000',
        },
    }

    export const Component = () => {
        // you specify the prop theme that recieves the object from above
        return (
          <div>
            <Button text="Normal theme" />
            <Button themes={theme} text="New theme" />
            <InputText placeholder="Normal theme" />
            <InputText themes={theme} placeholder="New theme" />

            <br />

            <Button color="secondary" text="Normal secondary theme"  />
            <Button color="secondary" themes={theme} text="New secondary theme"  />
            <InputText color="secondary" placeholder="Normal secondary theme"  />
            <InputText color="secondary" themes={theme} placeholder="New secondary theme"  />
          </div>
        );
    }
`;

export const CustomizePage = () => {
    return (
        <div>
            <h1 className="title-component">Themes</h1>
            <br />
            <p>
                Like said in the  &nbsp;
                <Link className="autocomplete__link" to="/api/getting-start">
                    Get started
                </Link>  &nbsp;part, this package has some themes by default that are incorpored when you use
                some component. This is an object with the follow structure :
            </p>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={colorsConst} />
            <br />
            <p>
                But, if you want, you can change the value of  properties and customize your components with the theme you wish. 
                How? <b>Every component </b>can receive a prop call 'themes'. If you don't specify this prop, it will take the values by default
                that are above. Next you can find a example how you can  implement it.
            </p>
            
            <br />
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={customizeTheme} />

            <br />
            <Button text="Normal theme" />
            <Button themes={theme} text="New Theme" />
            <InputText placeholder="Normal theme" />
            <InputText themes={theme} placeholder="New theme" />
            <br />
            <Button color="secondary" text="Normal secondary theme"  />
            <Button color="secondary" themes={theme} text="New secondary theme"  />
            <InputText color="secondary" placeholder="Normal secondary theme"  />
            <InputText color="secondary" themes={theme} placeholder="New secondary theme"  />
            

        </div>
    )
}
