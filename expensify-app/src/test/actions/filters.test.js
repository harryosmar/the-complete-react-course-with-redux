import moment from 'moment';
import {
    setTextFilter,
    setStartDate,
    setEndDate,
    sortByDate,
    sortByAmount
} from '../../actions/filters.js';

test('should be able to generate setTextFilter', () => {
    expect(setTextFilter('keyword'))
    .toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'keyword'
    });
});


test('should be able to generate setTextFilter with default value', () => {
    expect(setTextFilter())
    .toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('should be able to generate setStartDate', () => {
    expect(setStartDate(moment(0)))
    .toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should be able to generate setEndDate', () => {
    expect(setEndDate(moment(0)))
    .toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should be able to generate sortByDate', () => {
    expect(sortByDate())
    .toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should be able to generate sortByAmount', () => {
    expect(sortByAmount())
    .toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});