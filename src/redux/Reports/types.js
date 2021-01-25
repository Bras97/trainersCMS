// export const Comment = {
//     id: "",
//     creator: null,
//     content: "",
//     reportId: ""
// }

// export const Report = {
//     id: "",
//     title: "",
//     creator: null,
//     content: "",
//     comments: null,
//     type: null,
//     image: null
// }
// export const ReportsState = {
//     reports: null,
//     currentReport: null,
//     pending: false
// }
  
export function Report(id, description, type, objectId, objectContent, objectRate) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.objectId = objectId;
    this.objectContent = objectContent;
    this.objectRate = objectRate;
  }

export const SET_REPORTS = 'SET_REPORTS';
export const SET_CURRENT_REPORT = 'SET_CURRENT_REPORT';
export const ADD_REPORT = 'ADD_REPORT';
export const EDIT_REPORT = 'EDIT_REPORT';
export const DELETE_REPORT = 'DELETE_REPORT';
export const SET_REPORT_PENDING = 'SET_REPORT_PENDING';
export const UPDATE_REPORT_INDEX = 'UPDATE_REPORT_INDEX';

export const SetReportsAction = (report) => {
    return{
        type: SET_REPORTS,
        payload: report
    }
}

export const SetCurrentReportAction = (report) => {
    return{
        type: SET_CURRENT_REPORT,
        payload: report
    }
}

export const AddReportAction = (report) => {
    return{
        type: ADD_REPORT,
        payload: report
    }
}

export const SetReportPending = (booleanValue) => {
    return{
        type: SET_REPORT_PENDING,
        payload: booleanValue
    }
}
