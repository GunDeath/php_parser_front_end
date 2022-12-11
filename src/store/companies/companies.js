import {createSlice} from "@reduxjs/toolkit";

const companiesLocalStorage = JSON.parse(localStorage.getItem('companies'))
const initialState = companiesLocalStorage || []

export const companiesSlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        companyAddItem: (state, action) => {
            if(state.length === 0){
                state.push(...action.payload)
            }else if(!state.some(p => p.id === action.payload.id) && !Array.isArray(action.payload) ){
                return [...state, action.payload]
            }else if (Array.isArray(action.payload)){
                state.filter(elem => elem.id === action.payload.id)
            }
        },
        clearCompanies: (state) => {
            return []
        },
        updateCompany: (state, action) => {
            state.splice(state.findIndex((el) => el.id === action.payload.id), 1, action.payload)
        }
    }
})

export const companyReducer = companiesSlice.reducer
export const companyActions = companiesSlice.actions