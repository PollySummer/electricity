import moment from "moment";

export const ELECTR = 'electricity';
export const GAS = 'gas';

export const CHART = 'chart';
export const TABLE = 'table';
export const LOW_ELE_PRICE = 120;
export const NOW_TIMESTAMP = moment().startOf('hour').unix();
export const mainUrl = '/electricity';
const label = {
    [ELECTR]: 'days',
    [GAS]: 'months',
};

export const PERIODS = [
    {
        label,
        value: 1,
    },
    {
        label,
        value: 2,
    }
];
