import React, {useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { formatNumberWithCommas } from '../utils/format';


export const Transaction = ({ transaction }) => {  // destructure from props eg props.transaction
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${formatNumberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
