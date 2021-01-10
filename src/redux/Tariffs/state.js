import { TariffsState } from './types';

const intialState = {
    tariffs: [{
        type: 'TARIFF',
        title: '1h personalny trening',
        id: "1",
        category: 'Pływanie',
        price: "60zł",
        creator: 1,
        comments: []
    },{
        type: 'TARIFF',
        title: '1h personalny trening',
        id: "2",
        category: 'Siłownia',
        price: "50zł",
        creator: 1,
        comments: []
    }
    ],
    currentTariff: null,
    pending: false,
}

export default intialState;