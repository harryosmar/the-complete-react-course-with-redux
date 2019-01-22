# Menu

* [Installation](#installation)
* [Examples with throw error](#examples-with-throw-error)
* [expect methods](#expect-methods)
   * [toBe](#tobe)
   * [toEqual](#toequal)
   * [any](#any)
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

[toBe](https://jestjs.io/docs/en/expect#tobevalue) is a strict comparison, equal to `===`.

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
```
[] === []; // false
{} === {}; // false
```

For `object` or `array` comparison, instead of checking the object or array index-value one by one.
We can use [`toEqual`](https://jestjs.io/docs/en/expect#toequalvalue) method.

```es6
expect({a:1}).toEqual({a:1}); // pass the assertion test
```

### any

expect.[any](https://jestjs.io/docs/en/expect#expectanyconstructor), used to assert the type, without any concern about the value. 

This is usefull for the test case, assertion for `id` which is random generated. Because the value of `id` is random, in test side, we don't care about the value, we just need to expect the type of `id` is an `Number`.

This expect `any` method, can be used inside [`toEqual`](#toequal) or `toBeCalledWith`.

```
const generateId = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const id = generateId();

test('should assert the value of id is an integer', () => {
  expect({id}).toequal({id: expect.any(Number)});
});
```

## Links

- https://jestjs.io/
