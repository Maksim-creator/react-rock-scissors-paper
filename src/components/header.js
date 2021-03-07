import React from 'react';
import {Button} from 'react-bootstrap';
 
const Header = ({setStarted,started}) => {

    return (
        <div className="d-flex justify-content-around">
            <h1>Нажмите, чтобы начать игру!</h1>
            <Button 
                onClick={() => setStarted(true)}
                disabled={started ? true: false}
                variant="warning"
                >Старт!</Button>{' '}
        </div>
    )
}

export default Header;