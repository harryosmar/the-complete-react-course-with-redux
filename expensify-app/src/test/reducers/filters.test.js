import moment from 'moment';
import filtersReducer from '../../reducers/filters.js';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters.js';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('Set text filter', () => {
    expect(filtersReducer(
        filtersReducerDefaultState,
        setTextFilter('keyword')
    )).toEqual({
        ...filtersReducerDefaultState,
        text: 'keyword'
    });
});

test('Set StartDate', () => {
    expect(filtersReducer(
        filtersReducerDefaultState,
        setStartDate(moment(0))
    )).toEqual({
        ...filtersReducerDefaultState,
        startDate: moment(0)
    });
});

test('Set EndDate', () => {
    expect(filtersReducer(
        filtersReducerDefaultState,
        setEndDate(moment(1))
    )).toEqual({
        ...filtersReducerDefaultState,
        endDate: moment(1)
    });
});

test('Set SortByAmount', () => {
    expect(filtersReducer(
        filtersReducerDefaultState,
        sortByAmount()
    )).toEqual({
        ...filtersReducerDefaultState,
        sortBy: 'amount'
    });
});

test('Set SortByDate', () => {
    expect(filtersReducer(
        { ...filtersReducerDefaultState, sortBy: 'amount' },
        sortByDate()
    )).toEqual({
        ...filtersReducerDefaultState,
        sortBy: 'date'
    });
});