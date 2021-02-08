import { Button } from 'lium-react-ui-library';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/demo';

export const LandingPage = ({history}) => {

    const dispatch = useDispatch();
    const demo = useSelector( state => state.demo );


    const logout = () => {
        dispatch(startLogout(demo));
        history.push("/demo/login");
    }

    useEffect(() => {
        
        return () => {
            dispatch(startLogout(demo));
        }
    }, [demo, dispatch])
    

    return (
        <div className="landingPage">
            <h1>Your data is below:</h1>
            <br/>
            <br/>
            <pre className="landingPage__data">
            {
                JSON.stringify(demo, null, 10)
            }
            </pre>
            <Button text="Logout" onClick={ logout }/>
        </div>
    )
}
