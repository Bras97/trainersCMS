import { Tariff } from './types';

const intialState = {
    tariffs: [new Tariff(
        "1",
        '1h personalny trening',
        'Pływanie',
        "60zł"
    ),new Tariff(
        "2",
        '1h personalny trening',
        'Siłownia',
        "50zł"
    )
    ]
}

export default intialState;