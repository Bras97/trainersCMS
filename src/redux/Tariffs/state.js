import { Tariff } from './types';

const intialState = {
    tariffs: [new Tariff(
        "1",
        '1h personalny trening',
        'Pływanie',
        "60"
    ),new Tariff(
        "2",
        '1h personalny trening',
        'Siłownia',
        "50"
    )
    ]
}

export default intialState;