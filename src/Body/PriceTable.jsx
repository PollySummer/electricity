import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { NOW_TIMESTAMP,ELECTR,GAS } from './consts';

function PriceTable({ electricityPrice}) {

    const data = electricityPrice?.ee.map((priceEE, index) => {
        return {
            ee: priceEE,
            lv: electricityPrice?.lv[index],
            fi: electricityPrice?.fi[index],
            lt: electricityPrice?.lt[index]
        }
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Estonia</th>
                    <th>Finland</th>
                    <th>Latvia</th>
                    <th>Lituania</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ ee, lt, lv, fi }, index) => {
                    const rowDate = moment.unix(ee.timestamp).format('DD.MM.YYYY HH:mm:ss');
                    const now = moment().startOf('hour').format('DD.MM.YYYY HH:mm:ss');
                    return (
                        <tr key={index} >
                            <td>{index}</td>
                            <td style={{ backgroundColor: rowDate === now ? 'red' : '' }}>{rowDate}</td>
                            <td>{ee?.price}</td>
                            <td>{fi?.price}</td>
                            <td>{lt?.price}</td>
                            <td>{lv?.price}</td>
                        </tr>
                    );
                })}

            </tbody>
        </Table>
    );
}

export default PriceTable;