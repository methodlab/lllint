# Code Style and Formatting Guidelines

## General Guidelines [1]

- Use consistent indentation (e.g., 2 or 4 spaces) [1.1]
- Limit line length to 80-120 characters [1.2]
- Use consistent naming conventions across the project [1.3]
- Place each statement on its own line [1.4]
- Use consistent spacing around operators and after commas [1.5]
- End files with a single newline character [1.6]
- Avoid trailing whitespace [1.7]
- Use consistent quotation marks (single or double) [1.8]
- Use consistent brace style (e.g., same-line or new-line) [1.9]
- Use consistent spacing inside parentheses and brackets [1.10]

## JavaScript [2]

### Naming Conventions [2.1]
- Use camelCase for variable and function names [2.1.1]
- Use PascalCase for class names [2.1.2]
- Use UPPER_SNAKE_CASE for constants [2.1.3]
- Prefix boolean variables with "is", "has", or "should" [2.1.4]
- Use descriptive and meaningful names [2.1.5]

### Variables [2.2]
- Use `const` for variables that won't be reassigned, `let` otherwise [2.2.1]
- Declare variables at the top of their scope [2.2.2]
- Avoid chain variable assignments [2.2.3]
- Use array destructuring for multiple assignments [2.2.4]

### Functions [2.3]
- Use arrow functions for anonymous functions [2.3.1]
- Place 1 space before the leading brace in function declarations [2.3.2]
- No space between the function name and the parameter list [2.3.3]
- Separate parameters with a comma followed by one space [2.3.4]
- Use implicit return for single-expression arrow functions [2.3.5]
- Wrap immediately invoked function expressions in parentheses [2.3.6]

### Objects and Arrays [2.4]
- Use object shorthand notation when possible [2.4.1]
- Place the closing brace of multiline objects on a new line [2.4.2]
- Use trailing commas in multiline object/array literals [2.4.3]
- Use computed property names when creating objects with dynamic keys [2.4.4]

### Strings [2.5]
- Use template literals for string interpolation [2.5.1]
- Use single quotes for string literals [2.5.2]
- Use template literals for multiline strings [2.5.3]

### Operators and Control Structures [2.6]
- Use strict equality operators (`===` and `!==`) [2.6.1]
- Use shorthand notation for boolean conditions [2.6.2]
- Use ternary operators for simple conditional assignments [2.6.3]
- Place 1 space before and after binary operators [2.6.4]
- No space after unary operators [2.6.5]
- Use parentheses to clarify operator precedence [2.6.6]

### Whitespace and Formatting [2.7]
- Use 2 spaces for indentation [2.7.1]
- Place 1 space before the leading brace in blocks [2.7.2]
- Place 1 space before the opening parenthesis in control statements [2.7.3]
- No space between function name and its parameter list [2.7.4]
- Use blank lines to separate logical blocks of code [2.7.5]
- No trailing whitespace at the end of lines [2.7.6]

## TypeScript [3]

### Type Annotations [3.1]
- Use type annotations for function parameters and return types [3.1.1]
- Use type inference for variable declarations when types can be easily inferred [3.1.2]
- Place a space after the colon in type annotations [3.1.3]
- Use union types with vertical alignment for readability [3.1.4]
- Use interfaces for object shapes [3.1.5]

### Interfaces and Types [3.2]
- Use PascalCase for interface and type alias names [3.2.1]
- Prefix interface names with 'I' (optional, based on team preference) [3.2.2]
- Use semicolons to separate interface members [3.2.3]
- Align interface members vertically for readability [3.2.4]

### Generics [3.3]
- Use PascalCase single letter names for type parameters [3.3.1]
- Use descriptive names for complex type parameters [3.3.2]
- Place a space after the type parameter list [3.3.3]

### Enums [3.4]
- Use PascalCase for enum names [3.4.1]
- Use PascalCase for enum members [3.4.2]
- Align enum members vertically for readability [3.4.3]

### Namespaces [3.5]
- Use PascalCase for namespace names [3.5.1]
- Indent namespace contents [3.5.2]

### Imports [3.6]
- Use named imports instead of namespace imports [3.6.1]
- Group imports by external libraries, then internal modules [3.6.2]
- Sort imports alphabetically within groups [3.6.3]

## Python [4]

### Naming Conventions [4.1]
- Use snake_case for function and variable names [4.1.1]
- Use PascalCase for class names [4.1.2]
- Use UPPER_SNAKE_CASE for constants [4.1.3]
- Prefix private attributes with a single underscore [4.1.4]
- Use descriptive and meaningful names [4.1.5]

### Indentation and Line Breaks [4.2]
- Use 4 spaces for indentation [4.2.1]
- Limit lines to 79 characters for code, 72 for comments and docstrings [4.2.2]
- Use hanging indents for long statements [4.2.3]
- Align elements in multiline statements [4.2.4]
- Add two blank lines before top-level classes and functions [4.2.5]
- Add one blank line before method definitions inside a class [4.2.6]

### Imports [4.3]
- Place imports at the top of the file [4.3.1]
- Group imports: standard library, third-party, local application [4.3.2]
- Use absolute imports when possible [4.3.3]
- Avoid wildcard imports [4.3.4]

### Whitespace [4.4]
- Use spaces around operators and after commas [4.4.1]
- Don't use spaces around '=' when used for keyword arguments or default parameter values [4.4.2]
- Don't use spaces inside parentheses, brackets, or braces [4.4.3]
- Use a space after '#' in comments [4.4.4]

### String Formatting [4.5]
- Use f-strings for string interpolation (Python 3.6+) [4.5.1]
- Use ''.format() for earlier Python versions [4.5.2]
- Use consistent quotes (single or double) throughout the project [4.5.3]

### Function and Method Definitions [4.6]
- Use parentheses for multiline parameter lists [4.6.1]
- Indent continuation lines for parameters [4.6.2]
- Use type hints for function parameters and return types (Python 3.5+) [4.6.3]

### Class Definitions [4.7]
- Use parentheses for empty class definitions [4.7.1]
- Place docstrings immediately after the class definition [4.7.2]

### Comments and Docstrings [4.8]
- Use docstrings for modules, functions, classes, and methods [4.8.1]
- Use inline comments sparingly [4.8.2]
- Indent block comments to the same level as the code they describe [4.8.3]

## CSS [5]

### Formatting [5.1]
- Use soft tabs with 2 spaces [5.1.1]
- Use lowercase for selector names [5.1.2]
- Use one selector per line in multi-selector rulesets [5.1.3]
- Include a single space before the opening brace [5.1.4]
- Place the closing brace on a new line [5.1.5]
- Include a single space after the colon in property declarations [5.1.6]
- End all property declarations with a semicolon [5.1.7]
- Separate each ruleset with a blank line [5.1.8]

### Naming Conventions [5.2]
- Use hyphen-delimited class names [5.2.1]
- Avoid using ID selectors [5.2.2]
- Use meaningful and descriptive class names [5.2.3]
- Use BEM (Block Element Modifier) naming convention [5.2.4]

### Property Order [5.3]
- Group related properties together [5.3.1]
- Order properties consistently (e.g., alphabetically or by type) [5.3.2]

### Shorthand Properties [5.4]
- Use shorthand properties where possible [5.4.1]
- Avoid redundant values in shorthand properties [5.4.2]

### Units [5.5]
- Omit unit specification after zero values [5.5.1]
- Use relative units (em, rem, %) when appropriate [5.5.2]

### Colors [5.6]
- Use lowercase for hex values [5.6.1]
- Use shorthand hex values where possible [5.6.2]
- Use `rgba()` for colors with opacity [5.6.3]

### Media Queries [5.7]
- Place media queries close to their relevant rule sets [5.7.1]
- Use `em` or `rem` units for media queries [5.7.2]

## SCSS [6]

### Nesting [6.1]
- Limit nesting to 3 levels deep [6.1.1]
- Use nesting for pseudo-classes and pseudo-elements [6.1.2]
- Avoid large nestings that span many lines [6.1.3]

### Variables [6.2]
- Use hyphen-delimited variable names [6.2.1]
- Use descriptive variable names [6.2.2]
- Scope variables to the smallest possible context [6.2.3]

### Mixins [6.3]
- Use hyphen-delimited mixin names [6.3.1]
- Define mixins for reusable code blocks [6.3.2]
- Use parameters in mixins for flexibility [6.3.3]

### Extend [6.4]
- Use `@extend` judiciously [6.4.1]
- Prefer mixins over `@extend` for more predictable output [6.4.2]

### Operators [6.5]
- Wrap operations in parentheses [6.5.1]
- Use spaces around operators [6.5.2]

### Comments [6.6]
- Use `//` for single-line comments [6.6.1]
- Use `/* */ [6.6.2]

## C [7]

### Naming Conventions [7.1]
- Use snake_case for function and variable names [7.1.1]
- Use UPPER_SNAKE_CASE for macros and constants [7.1.2]
- Use descriptive and meaningful names [7.1.3]

### Indentation and Braces [7.2]
- Use 4 spaces for indentation [7.2.1]
- Place opening brace on the same line for functions and control structures [7.2.2]
- Place else on the same line as the closing brace of the if statement [7.2.3]
- Use braces even for single-line blocks [7.2.4]

### Function Declarations [7.3]
- Place the return type on a separate line [7.3.1]
- Place each parameter on a separate line for long parameter lists [7.3.2]
- Align parameter names in multiline function declarations [7.3.3]

### Preprocessor Directives [7.4]
- Don't indent preprocessor directives [7.4.1]
- Use `#ifndef`, `#define`, and `#endif` for header guards [7.4.2]
- Use parentheses in macro definitions [7.4.3]

### Comments [7.5]
- Use `/* */` for multiline comments [7.5.1]
- Use `//` for single-line comments [7.5.2]
- Align multiline comments with code [7.5.3]

### Whitespace [7.6]
- Use spaces around binary operators [7.6.1]
- No space between unary operators and their operands [7.6.2]
- Use a space after commas in argument lists [7.6.3]
- No space between a function name and its parameter list [7.6.4]

### Pointers [7.7]
- Place the `*` next to the type, not the variable name [7.7.1]
- Use spaces on both sides of `*` in declarations [7.7.2]

## C++ [8]

### Naming Conventions [8.1]
- Use snake_case for function and variable names [8.1.1]
- Use PascalCase for class names [8.1.2]
- Use UPPER_SNAKE_CASE for macros and constants [8.1.3]
- Use m_ prefix for class member variables [8.1.4]

### Classes and Structs [8.2]
- Declare public, protected, and private sections in that order [8.2.1]
- Use explicit constructors when appropriate [8.2.2]
- Declare destructors virtual in base classes [8.2.3]
- Use the `override` keyword for virtual function overrides [8.2.4]

### Functions [8.3]
- Use trailing return type syntax for complex return types [8.3.1]
- Use `const` for member functions that don't modify object state [8.3.2]
- Use `noexcept` when functions won't throw exceptions [8.3.3]

### Templates [8.4]
- Place template declarations on a separate line [8.4.1]
- Use `typename` instead of `class` in template parameters [8.4.2]
- Use meaningful names for template parameters [8.4.3]

### Namespaces [8.5]
- Use lowercase for namespace names [8.5.1]
- Don't use `using namespace` directives in header files [8.5.2]
- Use inline namespaces judiciously [8.5.3]

### Memory Management [8.6]
- Prefer smart pointers over raw pointers [8.6.1]
- Use `std::make_unique` and `std::make_shared` [8.6.2]
- Use RAII principles for resource management [8.6.3]

### Error Handling [8.7]
- Use exceptions for error handling [8.7.1]
- Use `noexcept` for functions that won't throw [8.7.2]
- Use `try`-`catch` blocks for exception handling [8.7.3]