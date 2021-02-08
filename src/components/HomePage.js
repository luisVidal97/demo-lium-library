import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button } from 'lium-react-ui-library';

export const HomePage = () => {

    let history = useHistory();

    return (
        <div>
            <div className="home__nav">
                <Link to={{ pathname: "https://github.com/luisVidal97/lium-react-ui-library" }}  target="_blank">
                    <i className="fab fa-github fa-5x"></i>
                </Link>
            </div>
            <div className="home__main-content">

                <div className="home__div-title">
                    <h1 >Lium UI library for React</h1>
                </div>

                <div className="home__secondary-content">
                    <p>
                        A small, simple and awesome library for React. You can use it  in your projects
                        to create  beautiful user interface!
                    </p>
                    <Button shape="outlined" text="Let's get started" onClick={() => {
                        history.push("/api/getting-start");
                    }}/>
                </div>
                
            </div>
        </div>
    )
}
