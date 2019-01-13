# Menu

* [Installation](#installation)
* [Examples with throw error](#examples-with-throw-error)
* [Examples with expect method](#examples-with-expect-method)

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


# Examples with throw error
```
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);

    if (result !== 3) {
        throw new Error(`Ypu added 1 and 2. The result was ${result}. Expected 3`);
    }
});
```

# Examples with expect method
```
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

# Links
- https://jestjs.io/