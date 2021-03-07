import React, { useState } from 'react';
import './app.css';
import './main.css'
import { v4 as uuidv4 } from 'uuid';
import Spinner from './spinner';

const WaitingWindow = () => {
    return (
        <div className="waiting">
            <div>
                Ожидание начала...
            </div>
            <img src="http://img0.joyreactor.cc/pics/post/%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D0%B0-%D0%B0%D1%80%D1%82-6051948.jpeg" alt="img"/>
        </div>
    )
}

const renderResult = (message) => {
    const timer = setTimeout(() => {
        <Spinner />
    }, Math.random()*2);
    clearInterval(timer);
    document.querySelector('.res').textContent = message
}

const onItemSelect = (selectedElem, myCounter, enemyCounter, setMyCounter, setEnemyCounter) => {
    const array = ['Rock', 'Paper', 'Scissors'];
    const enemy = array[Math.floor(Math.random()*3)];

    if(enemy === selectedElem.beat){
        renderResult('Win!')
        myCounter = myCounter + 1;
        setMyCounter(myCounter)
        return
    } else if(selectedElem.value === enemy){
        renderResult('Nothing!')
        return
    } else {
        enemyCounter = enemyCounter + 1;
        setEnemyCounter(enemyCounter)
        renderResult('Lose!')
        return
    }
}

const Main = ({started}) => {
    const [myCounter, setMyCounter] = useState(0);
    const [enemyCounter, setEnemyCounter] = useState(0);

    const stylesBtn = "btn btn-warning p-3"

    const data = [
        {value: 'Rock', beat: 'Scissors'},
        {value: 'Scissors', beat: 'Paper'},
        {value: 'Paper', beat: 'Scissors'}
    ]

    if(!started){
        return <WaitingWindow />
    }
    if(started){
        const btns = data.map((item, i) => {
            return (
                <button className={stylesBtn} key={uuidv4()} onClick={() => onItemSelect(data[i], myCounter, enemyCounter, setMyCounter, setEnemyCounter)}>{item.value}</button> 
            )
        })

        return (
            <div>
                <div className="d-flex justify-content-around p-5 main">
                    {btns}
                </div>
                <div className="res"></div>
                <div className="counters d-flex">
                    <div className="my">Вы: {myCounter}</div>
                    <div className="bot">Компьютер: {enemyCounter}</div>
                </div>
            </div>
        )
    }
    
}

export default Main