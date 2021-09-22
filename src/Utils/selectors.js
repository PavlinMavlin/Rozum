export const getFilteredWorklog = (state, id)=> state.appReducer.worklog.filter(w => w.employee_id === id)
