import React from 'react';

import RowResult from './row';
import { getCurrentTimeString } from '../../helpers/funcs/time';

const ResultsTable = ({ results, setResults }) => {

    const show = results?.length > 0;
    
    const onClickPay = id => {
        console.log('id es:', id);
        const res = results.map((result) => {
            if(result.infractionType === id){
                let date = new Date();
                let day, month, year;
                day = date.getDay();
                month = date.getMonth();
                year = date.getFullYear();
                const newResult = {
                    ...result,
                    payed: true,
                    payDate: getCurrentTimeString(),
                }
                return newResult;
            }
            return result;
        });
        setResults(res);
    }

    return (
       <div className='row'>
            <table className='centered responsive-table' style={{ display: show ? 'block' : 'none'}}>
            <thead>
                <tr>
                    <th>DNI</th>
                    <th>Fecha de infracción</th>
                    <th>Identificador</th>
                    <th>Importe</th>
                    <th>Fecha de pago</th>
                    <th>#</th>
                </tr>
            </thead>

            <tbody>
                {results && show ? 
                    results.map(r => (
                        <RowResult 
                            dni={r.dni}
                            date={r.date}
                            id={r.infractionType}
                            cost={r.cost}
                            payDate={r.payDate}
                            payed={r.payed ? r.payed : false}
                            onPayed={onClickPay}
                        />
                    )) : ''
                }
            </tbody>
        </table>
       </div>
    )
};

export default ResultsTable;