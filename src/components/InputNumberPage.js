import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './shared/SyntaxHighlighterCode';

import { InputNumber } from 'lium-react-ui-library';
import { Link } from 'react-router-dom';

const importText = `
    import { InputNumber } from 'lium-react-ui-library';
`;
const textBorder = `
    <InputNumber border="none" />
    <InputNumber border="normal" />
    <InputNumber border="strong" />
`;
const colorInputNumber = `
    <InputNumber color="primary" placeholder="primary"/>
    <InputNumber color="secondary" placeholder="secondary"/>
    <InputNumber color="danger" placeholder="danger"/>
    <InputNumber color="success" placeholder="success"/>
    <InputNumber color="warning" placeholder="warning"/>
    <InputNumber color="dark" placeholder="dark"/>
`;
const disabledInputNumber = `
    <InputNumber disabled="true" placeholder="true"/>
    <InputNumber disabled="false" placeholder="false"/>
`;
const sizeInputNumber = `
    <InputNumber size="small" placeholder="small"/>
    <InputNumber size="medium" placeholder="medium"/>
    <InputNumber size="large" placeholder="large"/>
`;
const formatterInputNumber = `
    <InputNumber formatter='true'  placeholder='true'/>
    <InputNumber formatter='false' placeholder='false'/>
`;
const prefixInputNumber = `
    <InputNumber prefix='$' placeholder="primary" color="primary"/>
    <InputNumber prefix='T' placeholder="secondary" color="secondary"/>
    <InputNumber prefix='@' placeholder="danger" color="danger"/>
    <InputNumber prefix='T' placeholder="success" color="success"/>
    <InputNumber prefix='%' placeholder="warning" color="warning"/>
    <InputNumber prefix='*' placeholder="dark" color="dark"/>
`;
const valueOnChancehInputNumber = `
    <InputNumber prefix='$' formatter='true' size='small' value={state} onChange={ (e, number) => { setState(number)}}/>
`;

export const InputNumberPage = () => {
    return (
        <div >
        <h1 className="title-component">InputText</h1>
        <p>
            InputNumber component is a normal input that you can interact and allow the users to type only numbers,
            as positive, negatives and decimal numbers, even formats them.
            <br />
            <br />
            if you want to use it, you must import it first:
        </p>
        
        <ReactMarkdown  renderers={{
            code: SyntaxHighlighterCode
        }} children={importText} />

        <p>
           This component receives only these props:
        </p>
        <ul>
            <li>border: string</li>
            <li>color: string</li>
            <li>disabled: string</li>
            <li>size: string</li>
            <li>placeholder: string</li>
            <li>formatter: string</li>
            <li>prefix: string</li>
            <li>value: string</li>
            <li>onChange: function</li>
        </ul>
        <p>
           All these props are optional. Next, you can find more information about everyone.
        </p>
        

        <hr />
        <br />
        <h3 className="title-component">border</h3>
        <p>
           This prop receives a string which values can be:
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
        <InputNumber border="none"   placeholder="none"/>
        <InputNumber border="normal" placeholder="normal"/>
        <InputNumber border="strong" placeholder="strong"/>


        <hr />
        <br />
        <h3 className="title-component">color</h3>
        <p>
           This prop receives a string which values can be:
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
        }} children={colorInputNumber} />
        <br />
        <InputNumber color="primary" placeholder="primary"/>
        <InputNumber color="secondary" placeholder="secondary"/>
        <InputNumber color="danger" placeholder="danger"/>
        <InputNumber color="success" placeholder="success"/>
        <InputNumber color="warning" placeholder="warning"/>
        <InputNumber color="dark" placeholder="dark"/>


        <hr />
        <br />
        <h3 className="title-component">disabled</h3>
        <p>
           This prop receives a string which values can be:
        </p>
        <ul>
            <li>disabled="true"</li>
            <li>disabled="false" - <span className="text-bold">default value</span></li>
        </ul>
        <ReactMarkdown  renderers={{
            code: SyntaxHighlighterCode
        }} children={disabledInputNumber} />
        <br />
        <InputNumber disabled="true" placeholder="true"/>
        <InputNumber disabled="false" placeholder="false"/>


        <hr />
        <br />
        <h3 className="title-component">size</h3>
        <p>
           This prop receives a string which values can be:
        </p>
        <ul>
            <li>size="small"</li>
            <li>size="medium" - <span className="text-bold">default value</span></li>
            <li>size="large"</li>
        </ul>
        <ReactMarkdown  renderers={{
            code: SyntaxHighlighterCode
        }} children={sizeInputNumber} />
        <br />
        <InputNumber size="small" placeholder="small"/>
        <InputNumber size="medium" placeholder="medium"/>
        <InputNumber size="large" placeholder="large"/>


        <hr />
        <br />
        <h3 className="title-component">formatter</h3>
        <p>
           This prop formats the number, adding commas each 3 numbers. Besides, it receives a string which values can be:
        </p>
        <ul>
            <li>formatter="false" - <span className="text-bold">default value.</span></li>
            <li>formatter="true"</li>
        </ul>
        <ReactMarkdown  renderers={{
            code: SyntaxHighlighterCode
        }} children={formatterInputNumber} />
        <InputNumber formatter='true'  placeholder="true"/>
        <InputNumber formatter='false' placeholder="false"/>


        <hr />
        <br />
        <h3 className="title-component">prefix</h3>
        <p>
           This props adds an prefix at the beginning of box. Only take the first character that you give it .
        </p>
        <ul>
            <li>prefix="#" - <span className="text-bold">default value is empty</span></li>
        </ul>
        <ReactMarkdown  renderers={{
            code: SyntaxHighlighterCode
        }} children={prefixInputNumber} />
        <InputNumber prefix='$' placeholder="primary" color="primary"/>
        <InputNumber prefix='T' placeholder="secondary" color="secondary"/>
        <InputNumber prefix='@' placeholder="danger" color="danger"/>
        <InputNumber prefix='T' placeholder="success" color="success"/>
        <InputNumber prefix='%' placeholder="warning" color="warning"/>
        <InputNumber prefix='*' placeholder="dark" color="dark"/>


        <hr />
        <br />
        <h3 className="title-component">value and onChange</h3>
        <p>
           These props are used to bind the state of input and become a controlled component. Value prop receives a string
           and onChange receives a function. It is important to know that, though this is number component, the returned value
           is a number with string type.
        </p>
        <ul>
            <li>value="" - <span className="text-bold">default value is empty</span></li>
            <li>onChange = {`{ (e, number) => {} }`} - <span className="text-bold">default value is undefined. This can get the event and pss it by parameter</span></li>
        </ul>
        <ReactMarkdown  renderers={{
            code: SyntaxHighlighterCode
        }} children={valueOnChancehInputNumber} />
        <InputNumber prefix='$' formatter='true' size='small'/>


    </div>
    );
}
