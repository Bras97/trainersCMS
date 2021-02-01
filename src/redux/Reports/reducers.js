import { Reducer } from 'redux';
import initialState from './state';
import { SET_REPORTS, ADD_REPORT, SET_REPORT_PENDING, SET_CURRENT_REPORT, EDIT_REPORT, DELETE_REPORT, UPDATE_REPORT_INDEX } from './types';

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPORTS:
            return {
                ...state,
                reports: action.payload,
            };
        case ADD_REPORT:
            return {
                ...state,
                reports: [...state.reports, action.payload],
            };
        case SET_CURRENT_REPORT:
            return {
                ...state,
                currentReport: action.payload,
            };
        case SET_REPORT_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case EDIT_REPORT:
            {
                const reportIndex = state.reports.findIndex(report => report.id === action.payload.id)
                const currentReports = [...state.reports]
                currentReports[reportIndex] = action.payload
                return {
                    ...state,
                    reports: currentReports,
                };
            }
        case DELETE_REPORT:
            {
                const currentReports = state.reports.filter(function(el) { return el._id !== action.payload._id})
                return {
                    ...state,
                    reports: currentReports,
                };
            }
        case UPDATE_REPORT_INDEX:
            {
                const newMaxIndex = state.maxIndex + 1;
                return {
                    ...state,
                    maxIndex: newMaxIndex,
                };
            }
        default:
            return state;
    }
};

export default reportReducer;
