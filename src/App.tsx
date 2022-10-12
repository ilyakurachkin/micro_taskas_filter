import React, {useState} from 'react';
import './App.css';

function App() {

    const [money, setMoney] = useState([
        {banknote: 'Dollars', nominal: 100, number: ' a1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' z1234567890'},
        {banknote: 'RUBLES', nominal: 100, number: ' w1234567890'},
        {banknote: 'Dollars', nominal: 100, number: ' e1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' c1234567890'},
        {banknote: 'RUBLES', nominal: 100, number: ' r1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' x1234567890'},
        {banknote: 'RUBLES', nominal: 50, number: ' v1234567890'},
    ])

    let currentMoney = money.filter((FilterMoney)=>FilterMoney.banknote === 'RUBLES')


    return (
        <ul>
            {currentMoney.map((objFromMoneyArr,index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default App;
