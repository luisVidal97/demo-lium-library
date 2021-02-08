import { AutocompleteInput, Button, InputNumber, InputText, SelectInput } from 'lium-react-ui-library';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const countries =
    [
        { id: 'USA', value: 'United States' },
        { id: 'COL', value: 'Colombia'      },
        { id: 'ECU', value: 'Ecuador'      },
        { id: 'VEN', value: 'Venezuela'      },
        { id: 'BRZ', value: 'Brasil'      },
        { id: 'PER', value: 'Peru'      },
        { id: 'ARG', value: 'Argentina'      },
    ]
;


export const RegisterPage = () => {

    const history = useHistory();
    
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        age: '',
        country: '',
        salary: ''
    });

    const handleClickGoSingIn = () => {
        history.push("/demo/login");
    }

    const handleClickGoSingUp = () => {
        console.log(form)
        if ( !form.name || !form.email  || !form.password || !form.salary || !form.age || !form.country){

        }else{
            
        }
    }

    return (
        <div className="registerPage">
        <div className="registerPage__card">

            <div className="loginPage__inputs">
                <p> Email: </p>
                <InputText 
                    placeholder="Write your email"
                    value={form.email} 
                    onChange={ (e) => 
                        { setForm({...form, email: e.target.value}); } 
                    }
                />
            </div>
            <div className="loginPage__inputs">
                <p> Password: </p>
                <InputText 
                    placeholder="Write your username" 
                    value={form.password} 
                    onChange={ (e) => 
                        { setForm({...form, password: e.target.value}); } 
                    }
                />
            </div>
            <div className="loginPage__inputs">
                <p> Name: </p>
                <AutocompleteInput 
                    placeholder="Write your name" 
                    onChange ={ (e) => 
                        { setForm({...form, name: e.target.value}); } 
                    }
                />
            </div>
            <div className="loginPage__inputs">
                <p> Age: </p>
                <InputNumber 
                    placeholder="Write your age" 
                    value = {form.age}
                    onChange = { (e, number) => 
                       { setForm({...form, age: number}); }
                    }
                />
            </div>

            <SelectInput 
                items={countries} 
                title="Enter the country you are living" 
                onSelectItems={(selectedItems) => { 
                    if (selectedItems.length > 0)
                        setForm({...form, country: selectedItems[0].value}) ;
                }}
            />
            
            <div className="loginPage__inputs">
                <p> Salary: </p>
                <InputNumber 
                    formatter="true" 
                    prefix="$" 
                    placeholder="Salary" 
                    value = {form.salary}
                    onChange = { (e, number) => 
                        { setForm({...form, salary: number}); }
                     }
                />
            </div>

            <div className="registerPage__buttons">
                <Button text="Sign up" shape="outlined" border="none" onClick={ handleClickGoSingUp }/>
                <Button text="Go to login"  border="none" onClick={ handleClickGoSingIn }/>
            </div>

        </div>
    </div>
    );
}
