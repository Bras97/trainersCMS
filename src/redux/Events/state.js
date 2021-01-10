import { EventsState } from './types';

const intialState = {
    events: [{
        type: 'EVENT',
        title: 'Wspólne sztangowanie',
        id: "1",
        content: 'Już jest nowa sala trenerów a o to jej pierwsze wydarzenie! Zbierzemy się wszyscy w jednej salce, każdy niech...',
        date: "20-02-2021",
        creator: 1,
        comments: []
    },{
        type: 'EVENT',
        title: 'Nocny trening',
        id: "2",
        content: 'Zapraszam wszystkich serdecznie na nocny trening. Zapraszam wszystkich serdecznie na nocny trening. Zapraszam wszystkich serdecznie na nocny trening. ',
        creator: 1,
        date: "27-02-2021",
        comments: []
    }
    ],
    currentEvent: null,
    pending: false,
}

export default intialState;