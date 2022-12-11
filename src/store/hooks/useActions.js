import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {companyActions} from "../companies/companies";

const allActions = {
    ...companyActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}