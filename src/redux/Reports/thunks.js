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
            dispatch(setReports(data));
        }
    } catch (e) {
        handler();
    }
};

export const deleteReportFromDatabase = (report) => async (
    dispatch
) => {
    try {
        const response = await kyClient.delete(`admin/reports/${report._id}`, {json: report});
        const data = await response.json();
        console.log("REPORT: ", data)
        if (data) {
            dispatch(deleteReport(report));
        }

    } catch (e) {
        console.log("ERROR")
    }
};