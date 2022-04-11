import React from 'react';

const RowResult = ({ dni, date, id, cost, payDate, payed, onPayed }) => {

    return (
        <tr>
            <td>{dni}</td>
            <td>{date}</td>
            <td>{id}</td>
            <td>${cost}</td>
            <td>{payDate}</td>
            {!payed ? 
            <td className='icon-clickeable' onClick={() => onPayed(id)}><i className="material-icons">create</i></td>
            : ''}
        </tr>
    )
};

export default RowResult;