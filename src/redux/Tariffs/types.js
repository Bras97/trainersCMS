// export const Comment = {
//     id: "",
//     creator: null,
//     content: "",
//     tariffId: ""
// }

// export const Tariff = {
//     id: "",
//     title: "",
//     creator: null,
//     price: null,
//     category: "",
//     comments: null,
//     type: null
// }

// export const TariffsState = {
//     tariffs: null,
//     currentTariff: null,
//     pending: false
// }

export function Tariff(title, price, category) {
    this.title = title;
    this.price = price;
    this.category = category;
  }

export const SET_TARIFFS = 'SET_TARIFFS';
export const SET_CURRENT_TARIFF = 'SET_CURRENT_TARIFF';
export const ADD_TARIFF = 'ADD_TARIFF';
export const EDIT_TARIFF = 'EDIT_TARIFF';
export const DELETE_TARIFF = 'DELETE_TARIFF';
export const SET_TARIFF_PENDING = 'SET_TARIFF_PENDING';

export const SetTariffsAction = (tariff) => {
    return{
        type: SET_TARIFFS,
        payload: tariff
    }
}

export const SetCurrentTariffAction = (tariff) => {
    return{
        type: SET_CURRENT_TARIFF,
        payload: tariff
    }
}

export const AddTariffAction = (tariff) => {
    return{
        type: ADD_TARIFF,
        payload: tariff
    }
}

export const SetTariffPending = (booleanValue) => {
    return{
        type: SET_TARIFF_PENDING,
        payload: booleanValue
    }
}
