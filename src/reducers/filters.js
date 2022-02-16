const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filters = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'FILTERS_FETCHING': 
            return {
                ...state, 
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED': 
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR': 
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'ACTIVE_FILTER_CHANGED':
            console.log(action.payload) 
            return {
                ...state, 
                activeFilter: action.payload
            }
        default: return state
    }
}

export default filters;