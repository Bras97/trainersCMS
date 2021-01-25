import { Report } from './types';

const intialState = {
    reports: [new Report(
        "1",
        'Post nie spełnia wymogów RODO. saf a dsad asd sadx fafsafsafsa  xzcsa w awrwadw adawdwa',
        "post",
        "1",
        null,
        null)
    , new Report(
        "2",
        'Post nie spełnia wymogów RODO. saf a dsad asd sadx fafsafsafsa  xzcsa w awrwadw adawdwa',
        'post',
        "3",
        null,
        null)
    , new Report(
        "3",
        'Komentarz jest wulgarny. saf a dsad asd sadx fafsafsafsa  xzcsa w awrwadw adawdwa',
        'comment',
        null,
        "Ty niewyduekowany bdslabsjlasdl cxzclxzmclz zxkldsajldsa asdsadasfsad !!!! abcddefs",
        null)    
    , new Report(
        "4",
        'Recenzja jest niesłusznie wystawiona. saf a dsad asd sadx fafsafsafsa  xzcsa w awrwadw adawdwa',
        'review',
        null,
        "Wystawiam 1.0 bo tak!",
        "1")    
    ]
}

export default intialState;