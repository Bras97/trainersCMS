import { EDIT_REPORT, ADD_REPORT, Report, ReportActions, SET_CURRENT_REPORT, SET_REPORTS, SET_REPORT_PENDING, DELETE_REPORT, UPDATE_REPORT_INDEX} from "./types";

export const setReports = (data) => {
    return {
        type: SET_REPORTS,
        payload: data
    };
}

export const setCurrentReport = (data) => {
    return {
        type: SET_CURRENT_REPORT,
        payload: data
    };
}

export const addReport = (data) => {
    return {
        type: ADD_REPORT,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_REPORT_PENDING,
        payload: data
    };
}

export const editReport = (report) => {
    return {
        type: EDIT_REPORT,
        payload: report
    };
}

export const deleteReport = (report) => {
    return {
        type: DELETE_REPORT,
        payload: report
    };
}

export const updateMaxIndex = () => {
    return {
        type: UPDATE_REPORT_INDEX
    };
}

