export const Comment = {
    id: "",
    creator: null,
    content: "",
    postId: ""
}

export const Tariff = {
    id: "",
    title: "",
    creator: null,
    price: null,
    category: "",
    comments: null,
    type: null
}

export const TariffsState = {
    posts: null,
    currentTariff: null,
    pending: false
}

export const SET_TARIFFS = 'SET_TARIFFS';
export const SET_CURRENT_TARIFF = 'SET_CURRENT_TARIFF';
export const ADD_TARIFF = 'ADD_TARIFF';
export const SET_TARIFF_PENDING = 'SET_TARIFF_PENDING';

export const SetTariffsAction = (post) => {
    return{
        type: SET_TARIFFS,
        payload: post
    }
}

export const SetCurrentTariffAction = (post) => {
    return{
        type: SET_CURRENT_TARIFF,
        payload: post
    }
}

export const AddTariffAction = (post) => {
    return{
        type: ADD_TARIFF,
        payload: post
    }
}

export const SetTariffPending = (booleanValue) => {
    return{
        type: SET_TARIFF_PENDING,
        payload: booleanValue
    }
}
