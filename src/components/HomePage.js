import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'lium-react-ui-library';

export const HomePage = () => {

    let history = useHistory();

    return (
        <div>
            <div className="home__nav"></div>
            <div className="home__main-content">

                <div className="home__div-title">
                    <h1 >Lium ui library for react</h1>
                </div>

                <div className="home__secondary-content">
                    <p>
                        A small, simple and awesome library for React. You can use it  in your projects
                        to create user beutiful user interface
                    </p>
                    <Button shape="outlined" text="Let's get started" onClick={() => {
                        history.push("/api/getting-start");
                    }}/>
                </div>
                
            </div>
        </div>
    )
}
