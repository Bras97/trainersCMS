import { PostsState } from './types';

const intialState = {
    posts: [{
        type: 'POST',
        title: 'Super post',
        id: "1",
        content: 'Już jest nowa strona trenerów a o to jej pierwszy post! Hurra! Aż chce się pójść na siłownię wyrobić trochę muskulatury.',
        creator: 1,
        comments: []
    },{
        type: 'POST',
        title: 'Otwieramy siłownie!',
        id: "2",
        content: 'Po zmniejszeniu obostrzeń w kraju możliwe jest ponowne pompowanie i pakowanie. Wszycy na to czekali. Dosłownie każdy, który siedział w domu zbyt długo.',
        creator: 1,
        comments: []
    },
    {
        type: 'POST',
        title: 'Nowe hantle Hantlex 4.0',
        id: "3",
        content: 'Hantle Hantlex 4.0 to niebywały cud techniki. Wystarczy tylko je podnieś, zgiąć rękę, potem zgiąć jeszcze raz i tak cały czas, a efekt będzie zdumiewający!',
        creator: 1,
        comments: []
    },
    ],
    currentPost: null,
    pending: false,
}

export default intialState;