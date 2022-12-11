import {configureStore} from "@reduxjs/toolkit";
import {companyReducer} from "./companies/companies";


export const store = configureStore({
    reducer: {
        company: companyReducer,
    }
})