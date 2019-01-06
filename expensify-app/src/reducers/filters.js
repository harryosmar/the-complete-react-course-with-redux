import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (prevState = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...prevState, text: action.text};
        case 'SORT_BY_AMOUNT':
            return {...prevState, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...prevState, sortBy: 'date'};
        case 'SET_START_DATE':
            return {...prevState, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...prevState, endDate: action.endDate};
        default:
            return prevState;
    }
};