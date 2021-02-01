import {setReports, deleteReport} from './actions';
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

export const fetchReports = (handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`admin/reports`);
        const data = await response.json();
        if (data) {
            const currentReports = data.filter(function(el) { return el.decision == null})

            dispatch(setReports(currentReports));
        }
    } catch (e) {
        handler();
    }
};

export const deleteReportFromDatabase = (report) => async (
    dispatch
) => {
    try {
        const response = await kyClient.post(`admin/reports/${report._id}/resolve`, {json: {decision: false}});
        const data = await response.json();
        console.log("REPORT: ", data)
        if (data) {
            dispatch(deleteReport(report));
        }

    } catch (e) {
        console.log("ERROR")
    }
};

export const approveReport = (report) => async (
    dispatch
) => {
    try {
        console.log("ID: ", report._id)
        const response = await kyClient.post(`admin/reports/${report._id}/resolve`, {json: {decision: true}});
        const data = await response.json();
        console.log("REPORT: ", data)
        if (data) {
            dispatch(deleteReport(report));
        }
    } catch (e) {
        console.log("ERROR")
    }
};