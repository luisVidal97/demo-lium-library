import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighterCode } from './shared/SyntaxHighlighterCode';;

import { SelectInput } from 'lium-react-ui-library';



const importSelectInput = `
    import { SelectInput } from 'lium-react-ui-library';
`;

const propsRequiredSelectInput = `
    import React, { useState } from 'react';
    import { SelectInput } from 'lium-react-ui-library';

    export const Component = () => {

      const [selectons, setSelectons] = useState([]);
      const [array, setArray] = useState(
        [
            { id: 'USA', value: 'United States' },
            { id: 'COL', value: 'Colombia'      }
        ]
      );

      return (
        <div>
          <SelectInput title="Select your country" items={array} onSelectItems={ (selectedItems) =>{ setSelectons(items); } }/>
          <SelectInput title="Select your country" items={array} onSelectItems={ (selectedItems) =>{ setSelectons(items); } }/>
        </div>
      );
    }
`;

const titleSelectInput = `
    <SelectInput title="whatever you want" items={array} onSelectItems={ (selectedItems) =>{  } }/>
`;
const multiSelectInput = `
    <SelectInput title="MultiSelect" multiSelect="true" items={array} onSelectItems={ (selectedItems) =>{  } }/>
`;

export const SelectInputPage = () => {

    return (
        <div >
            <h1 className="title-component">SelectInput</h1>
            <p>
                SelectInput component is a select input that allow you limit the options that you want to show to users
                <br />
                <br />
                if you want to use it, you must import it first:
            </p>
            
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={importSelectInput} />

            <p>
               This component receive only these props:
            </p>
            <ul>
                <li>items: string *<span className="text-bold"> is required</span></li>
                <li>onSelectItems: function *<span className="text-bold">is required</span> </li>
                <li>title: string</li>
                <li>multiSelect: boolean</li>
            </ul>
            <p>
               Next, you can find more information about everyone.
            </p>
            
            
            <hr />
            <br />
            <h3 className="title-component">items and onSelectItems</h3>
            <p>
                Both are required. Items prop is an object array with id and value properties per object.
                This make sure that the element are unique. These elements will show in the options of select.
                Besides, you have to specify the function that return an array with the selected elements.
                In this case, if you don't specify multiSelect mode, you can only select one element. 
            </p>

            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={propsRequiredSelectInput} />
            
            <SelectInput 
                title="Select your country" 
                items={ [
                            { id: 'USA', value: 'United States'},
                            { id: 'COL', value: 'Colombia'}
                        ]} 
                onSelectItems={ (items) => console.log(items) }
            />
            

            <hr />
            <br />
            <h3 className="title-component">title</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>title="whatever you want" - <span className="text-bold">default value is empty</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={titleSelectInput} />

            <SelectInput 
                title="whatever you want" 
                items={ [
                            { id: 'USA', value: 'United States'},
                            { id: 'COL', value: 'Colombia'}
                        ]} 
                onSelectItems={ (items) => console.log(items) }
            />


            <hr />
            <br />
            <h3 className="title-component">multiSelect</h3>
            <p>
               This prop receive a string which values can be:
            </p>
            <ul>
                <li>multiSelect="true" - <span className="text-bold">default value is "false"</span></li>
            </ul>
            <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
            }} children={multiSelectInput} />

            <SelectInput 
                title="MultiSelect" 
                multiSelect={true}
                items={ [
                            { id: 'USA', value: 'United States'},
                            { id: 'COL', value: 'Colombia'},
                            { id: 'CAD', value: 'Canada'}
                        ]} 
                onSelectItems={ (items) => console.log(items) }
            />

        </div>
    );
}
