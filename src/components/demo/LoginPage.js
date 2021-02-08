import React, { useState } from 'react';
import { Button, InputText} from 'lium-react-ui-library';
import { useHistory } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/demo';
import { useDispatch, useSelector } from 'react-redux';


import Swal from 'sweetalert2';


export const LoginPage = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();
    const dispatch = useDispatch();
    const demoState = useSelector( state => state.demo);

    const handleClickGoSingUp = () => {
        history.push("/demo/register");
    }

    const handleClickGoSingIn = () => {

        if(form.email && form.password) {

            if(demoState.email === form.email && demoState.password === form.password){   
                dispatch(startLoginEmailPassword(demoState));
                history.push("/demo/landing-page");
            }else {
                Swal.fire('Error', 'Email or password are wrong','error');
            }
        }

    }

    return (
        <div className="loginPage">
            <div className="loginPage__card">


                <div className="loginPage__inputs">
                    <p> Email: </p>
                    <InputText 
                        placeholder="Write your email" 
                        value={form.email}  
                        onChange={ e => { setForm({...form, email: e.target.value}) }}
                    />
                </div>
                <div className="loginPage__inputs">
                    <p> Password: </p>
                    <InputText 
                        type="password"
                        placeholder="Write your password" 
                        value={form.password} 
                        onChange={ e => { setForm({...form, password: e.target.value}) }}
                    />
                </div>

                <div className="loginPage__buttons">
                    <Button text="Sign up" shape="outlined" border="none" onClick={ handleClickGoSingUp }/>
                    <Button text="Sign in"  border="none" onClick={ handleClickGoSingIn }/>
                </div>

            </div>
        </div>
    );
}
