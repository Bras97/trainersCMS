import { Report } from './types';

const intialState = {
    reports: [new Report(
        "1",
        'Super report',
        'Już jest nowa strona trenerów a o to jej pierwszy report! Hurra! Aż chce się pójść na siłownię wyrobić trochę muskulatury.',
        null)
    , new Report(
        "2",
        'Otwieramy siłownie!',
        'Po zmniejszeniu obostrzeń w kraju możliwe jest ponowne pompowanie i pakowanie. Wszycy na to czekali. Dosłownie każdy, który siedział w domu zbyt długo.',
        null)
    , new Report(
        "3",
        'Nowe hantle Hantlex 4.0',
        'Hantle Hantlex 4.0 to niebywały cud techniki. Wystarczy tylko je podnieś, zgiąć rękę, potem zgiąć jeszcze raz i tak cały czas, a efekt będzie zdumiewający!',
        null)    
    ]
}

export default intialState;