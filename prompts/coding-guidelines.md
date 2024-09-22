# Coding Guidelines

## General Guidelines [1]

- Favor shorter, more concise code almost always [1.1]
- Use comments very sparingly; code should be self-describing [1.2]
- Use 2 spaces for indentation across all languages [1.3]
- Utilize TypeScript's type system to its fullest extent [1.4]

## TypeScript/JavaScript [2]

### Syntax and Formatting [2.1]

- Omit semicolons unless strictly necessary [2.1.1]
- Use single quotes for strings [2.1.2]
- Use template literals for string interpolation [2.1.3]
- Use arrow functions for anonymous functions [2.1.4]
- Use destructuring assignment where applicable [2.1.5]
- Use spread/rest operators when appropriate [2.1.6]

### Variables and Naming [2.2]

- Use `const` for all variables that are not reassigned, `let` otherwise [2.2.1]
- Use camelCase for variable and function names [2.2.2]
- Use PascalCase for class and interface names [2.2.3]
- Use UPPER_SNAKE_CASE for constants [2.2.4]

### Functions [2.3]

- Prefer arrow functions for brevity [2.3.1]
- Use implicit return for single-expression arrow functions [2.3.2]
- Use parameter destructuring for cleaner function signatures [2.3.3]

### Classes and Interfaces [2.4]

- Use interfaces for defining object shapes [2.4.1]
- Prefer composition over inheritance [2.4.2]
- Use access modifiers (public, private, protected) explicitly [2.4.3]

### Modules and Imports [2.5]

- Use ES6 module syntax (import/export) [2.5.1]
- Group imports by external libraries, then internal modules [2.5.2]
- Avoid default exports, prefer named exports [2.5.3]

### Asynchronous Code [2.6]

- Use async/await instead of raw Promises when possible [2.6.1]
- Handle errors with try/catch blocks in async functions [2.6.2]

### Type Annotations [2.7]

- Use type inference where possible, but add explicit types for function parameters and return types [2.7.1]
- Use union types and intersection types when appropriate [2.7.2]
- Utilize generics for reusable, type-safe code [2.7.3]

## SCSS [3]

- Use nesting, but avoid nesting more than 3 levels deep [3.1]
- Use variables for colors, font sizes, and other repeated values [3.2]
- Use mixins for reusable style patterns [3.3]
- Use the `&` operator for modifiers and pseudo-classes [3.4]
- Organize styles from most general to most specific [3.5]

## Svelte/SvelteKit [4]

### Component Structure [4.1]

- Use a logical order for component sections: script, template, style [4.1.1]
- Keep components small and focused on a single responsibility [4.1.2]
- Use props for component communication, avoid global state when possible [4.1.3]

### Reactivity [4.2]

- Use reactive declarations (`$:`) for derived values [4.2.1]
- Prefer `$store` syntax for subscribing to stores in the template [4.2.2]

### Event Handling [4.3]

- Use event modifiers (e.g., `on:click|preventDefault`) when applicable [4.3.1]
- Use event forwarding (`createEventDispatcher`) for custom events [4.3.2]

### Styling [4.4]

- Use scoped styles by default (`:global()` when necessary) [4.4.1]
- Leverage SCSS within Svelte components when beneficial [4.4.2]

### SvelteKit Specific [4.5]

- Use `load` functions for data fetching [4.5.1]
- Utilize SvelteKit's built-in form actions for form submissions [4.5.2]
- Use `$app` stores for accessing page data and navigation [4.5.3]

## Best Practices [5]

- Write pure functions where possible [5.1]
- Avoid mutation of function parameters [5.2]
- Use early returns to reduce nesting [5.3]
- Prefer `map`, `filter`, and `reduce` over imperative loops [5.4]
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators [5.5]
- Leverage TypeScript's discriminated unions for type-safe conditional logic [5.6]
