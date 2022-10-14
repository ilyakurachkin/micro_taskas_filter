import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    const [money, setMoney] = useState([
        {banknote: 'Dollars', nominal: 100, number: ' a1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' z1234567890'},
        {banknote: 'Rubles', nominal: 100, number: ' w1234567890'},
        {banknote: 'Dollars', nominal: 100, number: ' e1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' c1234567890'},
        {banknote: 'Rubles', nominal: 100, number: ' r1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' x1234567890'},
        {banknote: 'Rubles', nominal: 50, number: ' v1234567890'},
    ])

    type FilterType = 'All' | 'Dollars' | 'Rubles';


    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === 'Dollars') {
        currentMoney = money.filter((FilterMoney) => FilterMoney.banknote === 'Dollars');
    }

    if (filter === 'Rubles') {
        currentMoney = money.filter((FilterMoney) => FilterMoney.banknote === 'Rubles');
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <>
            <NewComponent
                currentMoney={money}
                onClick={()=>onClickFilterHandler('Dollars')}/>

            {/*<ul>*/}
            {/*    {currentMoney.map((objFromMoneyArr, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objFromMoneyArr.banknote}</span>*/}
            {/*                <span>{objFromMoneyArr.nominal}</span>*/}
            {/*                <span>{objFromMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: 35}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('All')}>All</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('Rubles')}>Rubles</button>*/}
            {/*</div>*/}
        </>
    );
}

export default App;
