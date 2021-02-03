import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './SyntaxHighlighterCode';

import { InputText } from 'lium-react-ui-library';
import { Link } from 'react-router-dom';

const importText = `
    import { InputText } from 'lium-react-ui-library';
`;
const textBorder = `
    <InputText border="none" />
    <InputText border="normal" />
    <InputText border="strong" />
`;
const colorInputText = `
    <InputText color="primary" placeholder="primary"/>
    <InputText color="secondary" placeholder="secondary"/>
    <InputText color="danger" placeholder="danger"/>
    <InputText color="success" placeholder="success"/>
    <InputText color="warning" placeholder="warning"/>
    <InputText color="dark" placeholder="dark"/>
`;
const disabledInputText = `
    <InputText disabled="true" placeholder="true"/>
    <InputText disabled="false" placeholder="false"/>
`;
const sizeInputText = `
    <InputText size="small" placeholder="small"/>
    <InputText size="medium" placeholder="medium"/>
    <InputText size="large" placeholder="large"/>
`;
const maxLengthInputText = `
    <InputText maxLength ="10" />
`;
const valueOnChancehInputText = `
    <InputText value="lucho" onChange={ (e) => { console.log(e.target.value) } }/>
`;

export const InputTextPage = () => {
    return (
        <div >
            <h1 className="title-component">InputText</h1>
            <p>
                InputText component is a normal input that you can interact and allow the users to type whatever
                they want. The type of this input is text.
                <br />
                <br />
                if you want to use it, you must import it first:
            </p>
            
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={importText} />

            <p>
               This component receive only these props:
            </p>
            <ul>
                <li>border: string</li>
                <li>color: string</li>
                <li>disabled: string</li>
                <li>size: string</li>
                <li>placeholder: string</li>
                <li>maxLength: string</li>
                <li>value : string</li>
                <li>onChange : function</li>
            </ul>
            <p>
               All these props are optional. Next, you can find more information about everyone.
            </p>
            

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
            }} children={textBorder} />
            <br />
            <InputText border="none"   placeholder="none"/>
            <InputText border="normal" placeholder="normal"/>
            <InputText border="strong" placeholder="strong"/>


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
            }} children={colorInputText} />
            <br />
            <InputText color="primary" placeholder="primary"/>
            <InputText color="secondary" placeholder="secondary"/>
            <InputText color="danger" placeholder="danger"/>
            <InputText color="success" placeholder="success"/>
            <InputText color="warning" placeholder="warning"/>
            <InputText color="dark" placeholder="dark"/>


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
            }} children={disabledInputText} />
            <br />
            <InputText disabled="true" placeholder="true"/>
            <InputText disabled="false" placeholder="false"/>


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
            }} children={sizeInputText} />
            <br />
            <InputText size="small" placeholder="small"/>
            <InputText size="medium" placeholder="medium"/>
            <InputText size="large" placeholder="large"/>


            <hr />
            <br />
            <h3 className="title-component">maxLength</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>maxLength="10" - <span className="text-bold">default value is undefined. If you put any letter, it will not take it.</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={maxLengthInputText} />
            <InputText maxLength="10"/>


            <hr />
            <br />
            <h3 className="title-component">value and onChange</h3>
            <p>
               These props are used to bind the state of input and become a controlled component. Valu prop receive a string
               and onChange receive a function.
            </p>
            <ul>
                <li>value="" - <span className="text-bold">default value is empty</span></li>
                <li>onChange = {`{ () => {} }`} - <span className="text-bold">default value is undefined. This can get the event and pss it by parameter</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={valueOnChancehInputText} />
            <InputText value="lucho" onChange={ (e) => { console.log(e.target.value) } }/>


        </div>
    );
}
