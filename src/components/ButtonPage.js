import { Button } from 'lium-react-ui-library';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './shared/SyntaxHighlighterCode';;

const importButton = `
    import { Button } from 'lium-react-ui-library';
`;
const textButton = `
    <Button />
    <Button text="Click here!"/>
`;
const borderButton = `
    <Button border="none" text="none"/>
    <Button border="normal" text="normal"/>
    <Button border="strong" text="strong"/>
`;
const colorButton = `
    <Button color="primary" text="primary"/>
    <Button color="secondary" text="secondary"/>
    <Button color="danger" text="danger"/>
    <Button color="success" text="success"/>
    <Button color="warning" text="warning"/>
    <Button color="dark" text="dark"/>
`;
const disabledButton = `
    <Button disabled="true" text="true"/>
    <Button disabled="false" text="false"/>
`;
const shapeButton = `
    <Button shape="contained" text="contained"/>
    <Button shape="outlined" text="outlined"/>
`;
const sizeButton = `
    <Button size="small" text="small"/>
    <Button size="medium" text="medium"/>
    <Button size="large" text="large"/>
`;
const onClickButton = `
    <Button text="onClick event" onClick={ (e)=>{ console.log(e.target) } }/>
`;

export const ButtonPage = () => {
    return (
        <div >
            <h1 className="title-component">Button</h1>
            <p>
                Button component is a normal button that you can interact and allow the users take several actions.
                <br />
                <br />
                if you want to use it, you must import it first:
            </p>
            
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={importButton} />

            <p>
               This component receive only these props:
            </p>
            <ul>
                <li>text: string</li>
                <li>border: string</li>
                <li>color: string</li>
                <li>disabled: string</li>
                <li>shape: string</li>
                <li>size: string</li>
                <li>onClick: function</li>
            </ul>
            <p>
               All these props are optional. Next, you can find more information about everyone.
            </p>
            
            
            <hr />
            <br />
            <h3 className="title-component">text</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>text="Click here!" - <span className="text-bold">default value is empty</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={textButton} />
            <br />
            <Button />
            <Button text="Click here!"/>
            

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
            }} children={borderButton} />
            <br />
            <Button border="none" text="none"/>
            <Button border="normal" text="normal"/>
            <Button border="strong" text="strong"/>


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
            }} children={colorButton} />
            <br />
            <Button color="primary" text="primary"/>
            <Button color="secondary" text="secondary"/>
            <Button color="danger" text="danger"/>
            <Button color="success" text="success"/>
            <Button color="warning" text="warning"/>
            <Button color="dark" text="dark"/>
            

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
            }} children={disabledButton} />
            <br />
            <Button disabled="true" text="true"/>
            <Button disabled="false" text="false"/>


            <hr />
            <br />
            <h3 className="title-component">shape</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>shape="contained" - <span className="text-bold">default value</span></li>
                <li>shape="outlined"</li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={shapeButton} />
            <br />
            <Button shape="contained" text="contained"/>
            <Button shape="outlined" text="outlined"/>
            

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
            }} children={sizeButton} />
            <br />
            <Button size="small" text="small"/>
            <Button size="medium" text="medium"/>
            <Button size="large" text="large"/>


            <hr />
            <br />
            <h3 className="title-component">onCLick</h3>
            <p>
               This prop receive a function which it execute with onClick event:
            </p>
            <ul>
                <li>onCLick=function - <span className="text-bold">default value is undefined</span></li>
                
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={onClickButton} />
            <br />
            <Button text="onClick event" onClick={ (e)=>{ console.log(e.target)} }/>
           
          
        </div>
    );
}
