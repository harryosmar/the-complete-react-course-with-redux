import moment from 'moment';
import filtersReducer from '../../reducers/filters.js';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters.js';

test('Should set state default', () => {
    const state = filtersReducer(undefined,{ type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set text filter', () => {
    const text = 'keyword';
    const state = filtersReducer(undefined, { ...setTextFilter(), text});

    expect(state.text).toBe(text);
});

test('Should set StartDate', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { ...setStartDate(), startDate});

    expect(state.startDate).toBe(startDate);
});

test('Should set EndDate', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { ...setEndDate(), endDate});

    expect(state.endDate).toBe(endDate);
});

test('Should set SortByAmount', () => {
    const state = filtersReducer(undefined, sortByAmount());
    expect(state.sortBy).toBe('amount');
});

test('Should set SortByDate', () => {
    const state = filtersReducer(
        {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        },
        sortByDate()
    );

    expect(state.sortBy).toBe('date');
});