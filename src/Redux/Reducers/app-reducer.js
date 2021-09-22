//types
import {getEmployees, getWorklog} from "../../Api/api";

const SET_EMPLOYEES_SUCCES = "GET_EMPLOYEES_SUCCES"
const SET_WORKLOG_SUCCES = "GET_WORKLOG_SUCCES"
const SET_LOADING = "SET_LOADING"

const initialState = {
    employees: [],
    worklog: [],
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES_SUCCES:
            return {
                ...state,
                employees: action.employees.sort(((a, b) => a.lastName > b.lastName ? 1 : -1))
            }
        case SET_WORKLOG_SUCCES:
            return {
                ...state,
                worklog: action.worklog
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}
//Action
export const setEmployeesSucces = (employees) => ({type: SET_EMPLOYEES_SUCCES, employees})

export const setWorklogSuccess = (worklog) => ({type: SET_WORKLOG_SUCCES, worklog})

export const setLoading = (loading) => ({type: SET_LOADING, loading})

//thunk
export const fetchEmployees = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const employees = await getEmployees()
            dispatch(setEmployeesSucces(employees))
            dispatch(setLoading(false))
        } catch (error) {
            console.log('error')
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const fetchWorklog = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const worklog = await getWorklog()
            dispatch(setWorklogSuccess(worklog))
            dispatch(setLoading(false))
        } catch (error) {
            console.log('error')
        } finally {
            dispatch(setLoading(false))
        }
    }
}