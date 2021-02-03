import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './SyntaxHighlighterCode';

import { AutocompleteInput } from 'lium-react-ui-library';
import { Link } from 'react-router-dom';


const importAutcomplete = `
    import { AutocompleteInput } from 'lium-react-ui-library';
`;
const autcomplete = `
    <AutocompleteInput />
`;
const autcompleteOwnItems = `
    <AutocompleteInput ownItems = { ['Luis','Nathaly','Lopez','Lomo'] } />
`;
const autcompleteBorder = `
    <AutocompleteInput border="none"/>
    <AutocompleteInput border="normal"/>
    <AutocompleteInput border="strong"/>
`;
const autcompleteSize = `
    <AutocompleteInput size="small"/>
    <AutocompleteInput size="medium"/>
    <AutocompleteInput size="large"/>
`;
const autcompleteColor = `
    <AutocompleteInput color="primary"/>
    <AutocompleteInput color="secondary"/>
    <AutocompleteInput color="danger"/>
    <AutocompleteInput color="success"/>
    <AutocompleteInput color="warning"/>
    <AutocompleteInput color="dark"/>
`;
const autcompleteDisabled = `
    <AutocompleteInput disabled ="true" />
`;
const autcompletePlaceholder = `
    <AutocompleteInput placeolder ="Type your hometown" />
`;
const autcompleteOnChange = `
    <AutocompleteInput onChange = { (e) => { console.log(e.target.value)} } />
`;
const autcompleteMaxLength = `
    <AutocompleteInput maxLength ="10" />
`;


export const AutocompletePage = () => {


    return (
        <div>
            <h1 className="title-component">Autocomplete</h1>
            <p>
                Autocomplete component is a normal text input with a extra functionality that alow you 
                show several suggestions when the user type any thing. It is very easy to use it.
                <br />
                <br />
                if you want to use it, you must import it first:
            </p>
            
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={importAutcomplete} />

            <p>
               This component receive only these props:
            </p>
            <ul>
                <li>ownItems: array of string</li>
                <li>border: string</li>
                <li>size: string</li>
                <li>color: string</li>
                <li>disabled: string</li>
                <li>placeholder: string</li>
                <li>maxLength: string</li>
                <li>onChange: function</li>
            </ul>
            <p>
               All these props are optional. Next, you can find more information about everyone.
            </p>
            
            
            <hr />
            <br />
            <h3 className="title-component">ownItems</h3>
            <p>
                This prop allow you pass it any items in string array form. With this, just the
                options you pass will show in the suggestions. If you do not specify anything,
                the component will do a request to following api: <br /><br />
                https://api.datamuse.com/sug?s=word <br /><br />
                , where word is the text that the user is typing.
            </p>

            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteOwnItems} />

            <AutocompleteInput ownItems={['Luis','Nathaly','Lopez','Lomo']}/>
            <br />
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcomplete} />

            <AutocompleteInput />



            <hr />
            <br />
            <h3 className="title-component">border</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>border="none"</li>
                <li>border="normal" - <span className="text-bold">default value</span></li>
                <li>border="strong"</li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteBorder} />

            <div className="autocomplete__content">
                <AutocompleteInput border="none"/>
                <AutocompleteInput border="normal"/>
                <AutocompleteInput border="strong"/>
            </div>


            <hr />
            <br />
            <h3 className="title-component">size</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>size="small"</li>
                <li>size="medium" - <span className="text-bold">default value</span></li>
                <li>size="large"</li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteSize} />

            <div className="autocomplete__content">
                <AutocompleteInput size="small"/>
                <AutocompleteInput size="medium"/>
                <AutocompleteInput size="large"/>
            </div>


            <hr />
            <br />
            <h3 className="title-component">color</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>color="primary" - <span className="text-bold">default value</span></li>
                <li>color="secondary"</li>
                <li>color="danger"</li>
                <li>color="success"</li>
                <li>color="warning"</li>
                <li>color="dark"</li>
            </ul>
            <p>
            If you do not know about the value of everyone, please redirect to &nbsp;
               <Link to="/api/getting-start" className="autocomplete__link">Getting start</Link>
            </p>
              
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteColor} />

            <div className="autocomplete__content">
                <AutocompleteInput color="primary"/>
                <AutocompleteInput color="secondary"/>
                <AutocompleteInput color="danger"/>
            </div>
            <div className="autocomplete__content">
                <AutocompleteInput color="success"/>
                <AutocompleteInput color="warning"/>
                <AutocompleteInput color="dark"/>
            </div>


            <hr />
            <br />
            <h3 className="title-component">disabled</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>disabled="true"</li>
                <li>disabled="false" - <span className="text-bold">default value</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteDisabled} />

            <div className="autocomplete__content">
                <AutocompleteInput disabled="true"/>
                <AutocompleteInput disabled="false"/>
            </div>


            <hr />
            <br />
            <h3 className="title-component">placeholder</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>placeholder="whatever you want" - <span className="text-bold">default value is empty</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompletePlaceholder} />

            <AutocompleteInput placeholder="Type your hometown"/>

            <hr />
            <br />
            <h3 className="title-component">maxLength</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>maxLength="20" - <span className="text-bold">default value is undefined. If you put any letter, it will not take it.</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteMaxLength} />

            <AutocompleteInput maxLength="10"/>
            
            <hr />
            <br />
            <h3 className="title-component">maxLength</h3>
            <p>
               This prop receive a function which execute when occur any change in the component:
            </p>
            <ul>
                <li>onChange= {`{ (e) => {} }`} - <span className="text-bold"> This receive the event of the object</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={autcompleteOnChange} />

            <AutocompleteInput onChange={()=>{}}/>

        </div>
    );
}

