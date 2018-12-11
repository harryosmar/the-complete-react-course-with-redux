# the-complete-react-course-with-redux

## Links
- [indecision-app](https://github.com/harryosmar/the-complete-react-course-with-redux/tree/master/indecision-app)

## NOTE 

### JSX Expression

- `JSX expression` can only have 1 root element, the best pratice wrap inside `<div>` tag
```
let template = (
    <div>
        <h1>title<h1>
        <p>description</p>
    </div>
);
```
- `JSX expression` would not render `boolean`, `undefined` and `null` value.

### Conditional Rendering in JSX

- Logical `AND` operator
```
let age = 18;
return true && "something"; // will return "something"

// We can use this `and` logical operator to return jsx expression
return age >= 17 && <p>{age} years old</p>; // will return <p>18 years old</p>
```

