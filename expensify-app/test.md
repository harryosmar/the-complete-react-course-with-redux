# Menu

* [Installation](#installation)
* [Examples with throw error](#examples-with-throw-error)
* [expect methods](#expect-methods)
    * [toBe](#tobe)
    * [toEqual](#toequal)
    * [any](#any)
    * [toMatchSnapshot](#tomatchsnapshot)
* [Testing React Component](#testing-react-component)
    * [ReactShallowRenderer](#reactshallowrenderer)
* [Links](#links)

## Installation

1. install `jest`
```
yarn add --dev jest
```
2. Add the following section to your `package.json`:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
3. run below script in your terminal, make sure the path is in same with location path of `package.json`.
```
yarn run test
```
or with `watch`
```
yarn run test -- --watch
```
script `--` before `--watch` means that : 
- option `--watch` is passed to `jest` command, not for `yarn` command.
- everything before `--` passed to `yarn` command
- everything after `--` passed to `jest` command


## Examples with throw error

```es6
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);

    if (result !== 3) {
        throw new Error(`Ypu added 1 and 2. The result was ${result}. Expected 3`);
    }
});
```

## Expect methods

See List of available : [expect methods](https://jestjs.io/docs/en/expect#methods).

### toBe

expect().[toBe](https://jestjs.io/docs/en/expect#tobevalue) is a strict comparison, equal to `===`.

```es6
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

```es6
1 === 1; // true
false === false; // true
```

### toEqual

Because of [toBe](#tobe) is a strict comparison, so is doesn't worked for `array` or `object` comparison.

```es6
[] === []; // false
{} === {}; // false
```

For `object` or `array` comparison, instead of checking the object or array index-value one by one.
We can use [`toEqual`](https://jestjs.io/docs/en/expect#toequalvalue) method.

```es6
expect({a:1}).toEqual({a:1}); // pass the assertion test
```

### any

expect().[any](https://jestjs.io/docs/en/expect#expectanyconstructor), used to assert the type, without any concern about the value. 

This is usefull for the test case, assertion for `id` which is random generated. Because the value of `id` is random, in test side, we don't care about the value, we just need to expect the type of `id` is an `Number`.

This expect `any` method, can be used inside [`toEqual`](#toequal) or `toBeCalledWith`.

```es6
const generateId = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const id = generateId();

test('should assert the value of id is an integer', () => {
  expect({id}).toequal({id: expect.any(Number)});
});
```

### toMatchSnapshot

expect().[`toMatchSnapshot`](https://jestjs.io/docs/en/expect#tomatchsnapshotpropertymatchers-snapshotname)

example see [ReactShallowRenderer](#reactshallowrenderer).

## Testing React Component

When testing a `react component`, we have some concerns :
- What renders, in what situation. Can be related to `props` value changes.
- How do react component interacting with user. eg : if user click button, need to check if the state changed, make sure the `react component` is reacting correctly.

Need to install library :
- [`react-test-renderer`](https://reactjs.org/docs/test-renderer.html), allow to render `react component` inside of regular js code, instead of rendered in the browser. So we can assert what got rendered.

There is 2 ways, how to test `react-component`
- [`shallow rendering`](https://reactjs.org/docs/shallow-renderer.html), for simple component. When we do not worry about `life cycle` event and user interaction. Only to check what got rendered.
- [`full DOM rendering`](https://airbnb.io/enzyme/docs/api/mount.html)


### ReactShallowRenderer

How to test [`Header` component](https://github.com/harryosmar/the-complete-react-course-with-redux/blob/master/expensify-app/src/components/Header.js).

```es6
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header.js';

test('Should render header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    const renderOutput = renderer.getRenderOutput();
    console.log(renderOutput);
    expect(renderOutput).toMatchSnapshot();
});
```

What `console.log(renderOutput);` output look like :

```
{
    '$$typeof': Symbol(react.element),
    type: 'header',
    key: null,
    ref: null,
    props:
    {
        children: [
            [Object],
            [Object],
            [Object],
            [Object]
        ]
    },
    _owner: null,
    _store:
    {}
}
```

We will match this `renderOutput` to snapshot. Using jest expect method [`toMatchSnapshot`](#tomatchsnapshot). `toMatchSnapshot` will create a snapshot file of how `Header` render ouput look like.

See the [`Header Snapshot`](https://github.com/harryosmar/the-complete-react-course-with-redux/blob/master/expensify-app/src/test/components/__snapshots__/Header.test.js.snap) look like.

Note :
1. When we first running the test, it will create the snapshot, this will make the test always pass at the first time.
2. Later after the snapshot created, then we changes the `Header` component, it will compared the render output of `Header` component, to the existing snapshot, and it will fail.
3. We have 2 options to remove the changes from the `Header` component or to accept it.

```
Snapshot Summary
 › 1 snapshot test failed in 1 test suite. Inspect your code changes or press `u` to update them.
```

## Links

- https://jestjs.io/
- https://reactjs.org/docs/test-renderer.html
