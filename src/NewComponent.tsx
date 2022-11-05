import React, {FC} from 'react';


type CurrentArrayMoney = {
    money: Array<MoneyType>
    onClickFilterHandler: (value: any) => void
}

type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}


export const NewComponent: FC<CurrentArrayMoney> = (props) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
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
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => props.onClickFilterHandler('Rubles')}>Rubles</button>
            </div>
        </>
    );
};
