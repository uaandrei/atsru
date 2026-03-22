# Const Functions Skill

TRIGGER when: the user asks about function declarations, or when writing/reviewing TypeScript/JavaScript code that uses the `function` keyword.

## Rule

Do not use `function` declarations. Declare all functions as `const` arrow functions instead.

## Why

- Consistent style throughout the codebase
- Arrow functions do not have their own `this` binding, avoiding accidental context issues
- `const` prevents accidental reassignment
- Keeps function definitions uniform whether at module level, inside components, or as callbacks

## Examples

**Wrong — function declaration:**
```ts
function handleClick(event: MouseEvent) {
  console.log(event.target);
}

async function fetchData(url: string) {
  return await fetch(url);
}
```

**Correct — const arrow function:**
```ts
const handleClick = (event: MouseEvent) => {
  console.log(event.target);
};

const fetchData = async (url: string) => {
  return await fetch(url);
};
```

## Applies to

- Top-level utility functions
- React component event handlers
- Async functions
- Helper functions inside components or hooks

## Does NOT apply to

- React components themselves, which should also be `const` arrow functions:
  ```ts
  const MyComponent = () => <div />;
  ```
- Default exports that are already `const`

## Action

When you encounter a `function` keyword in this codebase, convert it to a `const` arrow function. Preserve the function signature, body, and any type annotations. Do not change logic.
