import React, {FC} from 'react';

type CurrentArrayMoney = {
    currentMoney: Array<MoneyType>
    onClick: ()=>void
}

type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}


export const NewComponent:FC<CurrentArrayMoney> = (props) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: 35}}>
                <button onClick={props.onClick}>All</button>
                <button onClick={props.onClick}>Dollars</button>
                <button onClick={props.onClick}>Rubles</button>
            </div>
        </>
    );
};
