import { Event } from './types';

const intialState = {
    events: [new Event(        
        "1",
        'Wspólne sztangowanie',
        new Date(),
        'Już jest nowa sala trenerów a o to jej pierwsze wydarzenie! Zbierzemy się wszyscy w jednej salce, każdy niech...',
        null
    ),new Event(        
        "2",
        'Nocny trening',
        new Date(),
        'Zapraszam wszystkich serdecznie na nocny trening. Zapraszam wszystkich serdecznie na nocny trening. Zapraszam wszystkich serdecznie na nocny trening.',
        null
    )
    ]
}

export default intialState;